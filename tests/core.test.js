const test = require('node:test');
const assert = require('node:assert/strict');
const { loadApp, loadV7, plain } = require('./helpers.cjs');
const { data, api } = loadApp();
const fixture = overrides => ({type1:'でんき', type2:'', hp:35, attack:55, defense:40, sp_attack:50, sp_defense:50, speed:90, abilities_all:'', ...overrides});
const pikachu = fixture({});
const gyarados = fixture({type1:'みず', type2:'ひこう', hp:95, sp_defense:100});
const thunderbolt = {type:'でんき', category:'special', power:90};

test('データ: 名前の重複・不正なタイプ・種族値・別名の参照先を確認', () => {
  for (const list of [data.pokemon, data.moves]) {
    assert.ok(list.length > 0);
    assert.equal(new Set(list.map(v => v.name)).size, list.length);
    for (const item of list) assert.ok(typeof item.name === 'string' && item.name.trim());
  }
  assert.equal(new Set(data.allTypes).size, 18);
  for (const pokemon of data.pokemon) {
    assert.ok(data.allTypes.includes(pokemon.type1));
    assert.ok(!pokemon.type2 || data.allTypes.includes(pokemon.type2));
    for (const stat of ['hp','attack','defense','sp_attack','sp_defense','speed']) {
      assert.ok(Number.isInteger(pokemon[stat]) && pokemon[stat] > 0, pokemon.name + ' ' + stat);
    }
  }
  for (const move of data.moves) {
    assert.ok(data.allTypes.includes(move.type), move.name);
    assert.ok(['physical','special','status'].includes(move.category), move.name);
    assert.ok(move.power == null || (Number.isFinite(move.power) && move.power >= 0), move.name);
  }
  for (const canonical of Object.values(data.moveAliases)) assert.ok(data.moves.some(m => m.name === canonical), canonical);
  for (const defense of data.allTypes) for (const attack of data.allTypes) {
    assert.ok([0,0.5,1,2].includes(api.getComboMultiplier(attack,defense)), defense + '/' + attack);
  }
});

test('検索: ひらがな・全角・半角・空白・部分一致・未入力・見つからない名前', () => {
  assert.equal(api.getPokemonByExactName(' げんがー ').name, 'ゲンガー');
  assert.equal(api.getPokemonByExactName('ﾒｶﾞﾘｻﾞｰﾄﾞﾝＸ').name, 'メガリザードンX');
  assert.equal(api.getMoveByExactName(' １０まん ボルト ').name, '10まんボルト');
  assert.ok(api.searchPokemonByName('リザードン').length >= 3);
  assert.equal(api.searchPokemonByName('ゲンガー')[0].name, 'ゲンガー');
  assert.equal(api.searchPokemonByName('').length, 0);
  assert.equal(api.searchMoveByName('存在しない技').length, 0);
  assert.equal(api.getPokemonByExactName('存在しないポケモン'), null);
});

test('検索: 登録された全ポケモン・全技・全別名を引ける', () => {
  for (const pokemon of data.pokemon) assert.equal(api.getPokemonByExactName(pokemon.name).name, pokemon.name);
  for (const move of data.moves) assert.equal(api.getMoveByExactName(move.name).name, move.name);
  for (const [alias, name] of Object.entries(data.moveAliases)) assert.equal(api.getMoveByExactName(alias).name, name);
});

test('タイプ相性: 2倍・4倍・1/2・1/4・無効、攻撃側/防御側', () => {
  assert.equal(api.getComboMultiplier('ほのお','くさ'), 2);
  assert.equal(api.getComboMultiplier('でんき','みず','ひこう'), 4);
  assert.equal(api.getComboMultiplier('ほのお','みず'), 0.5);
  assert.equal(api.getComboMultiplier('くさ','ほのお','ひこう'), 0.25);
  assert.equal(api.getComboMultiplier('ゴースト','ノーマル'), 0);
  assert.ok(api.classifyValues('attack','ほのお')['2倍'].includes('くさ'));
  assert.ok(api.classifyValues('defense','ほのお')['2倍'].includes('みず'));
  assert.ok(api.classifyPokemonDefense(gyarados)['4倍'].includes('でんき'));
});

test('ダメージ: 固定条件・タイプ一致・16乱数・HP割合', () => {
  assert.equal(api.calculateActualStat(95, true), 202);
  assert.equal(api.calculateActualStat(50), 102); // 2*50 + 31 + 64 = 195; floor(195/2)+5
  const result = api.calculateDamagePercent(pikachu, gyarados, thunderbolt);
  assert.equal(result.min.toFixed(1), '70.3');
  assert.equal(result.max.toFixed(1), '83.2');
  assert.equal(result.typeMultiplier, 4);
  assert.equal(result.rollCount, 16);
  assert.equal(result.ohkoCount, 0);
});

test('ダメージ: 無効・変化技・威力なし・確定でHP以上', () => {
  const immune = api.calculateDamagePercent(pikachu, fixture({type1:'じめん'}), thunderbolt);
  assert.equal(immune.min, 0); assert.equal(immune.max, 0);
  assert.equal(api.calculateDamagePercent(pikachu, gyarados, {type:'みず', category:'status', power:null}), null);
  assert.equal(api.getMovePower({category:'special', power:null}), null);
  const ko = api.calculateDamagePercent(fixture({sp_attack:200}), gyarados, thunderbolt);
  assert.equal(ko.ohkoCount, 16); assert.equal(ko.ohkoChance, 100);
});

test('特殊処理: アクロバット・ボディプレス・イカサマ・サイコショック', () => {
  assert.equal(api.getMovePower({category:'physical', power:55, special_rule:'acrobatics'}), 110);
  const move = {type:'かくとう',category:'physical',power:80,special_rule:'defense_attack'};
  const attacker = fixture({attack:10,defense:120});
  const target = fixture({type1:'ノーマル',defense:80,attack:150});
  assert.deepEqual(plain(api.calculateDamagePercent(attacker,target,move)), plain(api.calculateDamagePercent({...attacker,attack:120},target,{...move,special_rule:undefined})));
  const foul = {...move,type:'あく',special_rule:'target_attack'};
  assert.deepEqual(plain(api.calculateDamagePercent(attacker,target,foul)), plain(api.calculateDamagePercent({...attacker,attack:150},target,{...foul,special_rule:undefined})));
  const shock = {...move,type:'エスパー',category:'special',special_rule:'physical_defense'};
  assert.deepEqual(plain(api.calculateDamagePercent(attacker,target,shock)), plain(api.calculateDamagePercent(attacker,{...target,sp_defense:target.defense},{...shock,special_rule:undefined})));
});

test('計算の分割で動作が変わらない: 全18×18相性と、全技×3組のダメージ', () => {
  // 同じ現在データを元のv7計算に渡す。将来のデータ更新でも比較に使える。
  const original = loadV7(data).api;
  for (const attack of data.allTypes) for (const defense of data.allTypes) {
    assert.equal(api.getComboMultiplier(attack,defense), original.getComboMultiplier(attack,defense));
  }
  const pairs = [[pikachu,gyarados],[fixture({type1:'ゴースト',sp_attack:130}),fixture({type1:'ノーマル',hp:160})],[fixture({type1:'かくとう',defense:180}),fixture({type1:'あく',type2:'はがね'})]];
  for (const move of data.moves) for (const [a,d] of pairs) {
    assert.deepEqual(plain(api.calculateDamagePercent(a,d,move)), plain(original.calculateDamagePercent(a,d,move)), move.name);
  }
});
