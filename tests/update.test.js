const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { loadApp, loadV7, read, plain } = require('./helpers.cjs');
const { data, api } = loadApp();
const diff = JSON.parse(read('docs/data-diff-2026-10-12.json'));
const evidence = JSON.parse(read('tests/fixtures/secondary-evidence.json'));
const old = loadV7().data;
const types = {Normal:'ノーマル',Fire:'ほのお',Water:'みず',Electric:'でんき',Grass:'くさ',Ice:'こおり',Fighting:'かくとう',Poison:'どく',Ground:'じめん',Flying:'ひこう',Psychic:'エスパー',Bug:'むし',Rock:'いわ',Ghost:'ゴースト',Dragon:'ドラゴン',Dark:'あく',Steel:'はがね',Fairy:'フェアリー'};
const stats = {hp:'hp',attack:'atk',defense:'def',sp_attack:'spa',sp_defense:'spd',speed:'spe'};
const fixture = overrides => ({type1:'でんき',type2:'',hp:35,attack:55,defense:40,sp_attack:50,sp_defense:50,speed:90,...overrides});

test('公式未確認: 候補M-Cや今日の照合日から現レギュレーションを確定しない', () => {
  const rule = data.review.current_regulation;
  assert.equal(rule.status,'unverified'); assert.equal(rule.id,null);
  assert.equal(rule.starts_at,null); assert.equal(rule.ends_at,null);
  assert.equal(rule.eligible_pokemon,null);
  for (const p of data.pokemon) assert.equal(api.getRegulationAvailability(p.name),'unverified');
});

test('公式情報が揃わない・期間外なら利用可能と扱わない（模擬データ）', () => {
  const {data: isolated, api: functions} = loadApp();
  const rule = isolated.review.current_regulation;
  Object.assign(rule,{status:'verified',id:'TEST',starts_at:'2026-10-01T00:00:00+09:00',ends_at:'2026-11-01T00:00:00+09:00',eligible_pokemon:['ゲンガー'],official_source_urls:['https://www.pokemonchampions.jp/']});
  assert.equal(functions.getRegulationAvailability('ゲンガー',new Date('2026-10-12T12:00:00+09:00')),'available');
  assert.equal(functions.getRegulationAvailability('メガゲンガー',new Date('2026-10-12T12:00:00+09:00')),'unavailable');
  assert.equal(functions.getRegulationAvailability('ゲンガー',new Date('2026-11-01T00:00:00+09:00')),'unverified');
  rule.ends_at=null;
  assert.equal(functions.getRegulationAvailability('ゲンガー',new Date('2026-10-12T12:00:00+09:00')),'unverified');
});

test('追加38件・メガ6件は2資料の種族値/タイプ一致を根拠にし、v7と重複しない', () => {
  assert.equal(diff.pokemon_added.length,38);
  assert.equal(diff.pokemon_added.filter(v=>v.is_mega).length,6);
  for (const added of diff.pokemon_added) {
    const actual = api.getPokemonByExactName(added.name), ref = evidence.pokemon[added.name];
    assert.ok(actual); assert.ok(!old.pokemon.some(p=>p.name===added.name));
    assert.equal(ref.matches.stats,true); assert.equal(ref.matches.types,true);
    assert.deepEqual(plain(ref.pokemon.types),ref.pokeapi_evidence.types);
    for (const [i, key] of Object.keys(stats).entries()) assert.equal(ref.pokemon.baseStats[stats[key]],ref.pokeapi_evidence.stats[String(i+1)]);
    for (const [key, sourceKey] of Object.entries(stats)) assert.equal(actual[key],ref.pokemon.baseStats[sourceKey],added.name+' '+key);
    assert.equal(actual.type1,types[ref.pokemon.types[0]]);
    assert.equal(actual.type2,ref.pokemon.types[1] ? types[ref.pokemon.types[1]] : '');
    assert.equal(api.getRecordReview('pokemon',added.name).origin,'secondary_reference');
    assert.equal(api.getRegulationAvailability(added.name),'unverified');
  }
});

test('既存313体のタイプ・種族値と18タイプ表を維持', () => {
  for (const before of old.pokemon) {
    const after=api.getPokemonByExactName(before.name);
    assert.ok(after,before.name);
    for (const field of ['type1','type2',...Object.keys(stats)]) assert.equal(after[field],before[field],before.name+' '+field);
  }
  assert.deepEqual(plain(data.typeChartDefense),old.typeChartDefense);
});

test('未掲載だった特性9件を資料で補完し、効果を未確認のまま扱う', () => {
  assert.equal(diff.abilities_updated.length,9);
  for (const changed of diff.abilities_updated) {
    const p=api.getPokemonByExactName(changed.name), ref=evidence.pokemon[changed.name];
    assert.equal(ref.matches.abilities,true);
    assert.deepEqual(plain(ref.pokemon.abilities),ref.pokeapi_evidence.abilities);
    assert.equal(p.ability1,ref.abilities_jp['0']);
    assert.match(p.abilities_description_all,/未確認/);
    assert.equal(api.getRecordReview('pokemon',changed.name).ability_effects,'unverified');
  }
  for (const name of ['メガシビルドン','メガカエンジシ']) {
    assert.match(api.getPokemonByExactName(name).ability1,/未確認|未掲載/);
    assert.equal(api.getRecordReview('pokemon',name).abilities,'unverified_japanese_name');
  }
});

test('技49種を追加し、タイプ・分類と使える威力を資料に合わせる', () => {
  assert.equal(diff.moves_added.length,49);
  for (const added of diff.moves_added) {
    const actual=api.getMoveByExactName(added.name),ref=evidence.moves[added.name];
    assert.ok(actual,added.name);
    assert.equal(actual.type,types[ref.type]);
    assert.equal(actual.category,ref.category);
    if (added.power_status==='secondary_agreement') {
      assert.equal(actual.power,ref.base_power);
      assert.equal(actual.power,ref.champions.basePower);
    } else assert.equal(actual.power,null);
    assert.equal(api.getRecordReview('moves',added.name).current_eligibility,'unverified');
  }
  assert.equal(new Set(data.moves.map(m=>api.normalize(m.name))).size,data.moves.length);
});

test('資料で威力が異なる3技は、未確認として計算しない', () => {
  for (const name of ['きりさく','ねらいうち','スターアサルト']) {
    const move=api.getMoveByExactName(name);
    assert.equal(move.power,null);
    assert.equal(api.getRecordReview('moves',name).power,'source_difference');
    assert.equal(api.calculateDamagePercent(fixture({}),fixture({type1:'みず'}),move),null);
  }
});

test('変化技は無効タイプ相手でも対象外（でんじは→ガブリアス）', () => {
  const move=api.getMoveByExactName('でんじは');
  assert.equal(api.calculateDamagePercent(api.getPokemonByExactName('ピカチュウ'),api.getPokemonByExactName('ガブリアス'),move),null);
  assert.match(api.getDamageUnsupportedReason(fixture({}),fixture({type1:'じめん'}),move),/変化技/);
});

test('未対応の変動威力・連続攻撃・固定ダメージ・一撃必殺は結果を出さない', () => {
  for (const name of ['アシストパワー','ロックブラスト','ちきゅうなげ','じわれ']) {
    const move=api.getMoveByExactName(name);
    assert.ok(move,name);
    assert.equal(api.calculateDamagePercent(fixture({}),fixture({type1:'みず'}),move),null,name);
    assert.match(api.getDamageUnsupportedReason(fixture({}),fixture({type1:'みず'}),move),/未対応|対象外/);
  }
  for (const move of data.moves.filter(m=>data.review.moves[m.name].calculation_support==='unsupported')) {
    assert.equal(api.calculateDamagePercent(fixture({}),fixture({type1:'みず'}),move),null,move.name);
  }
});

test('特性補正なしの表示と計算を揃える: てきおうりょくを自動適用しない', () => {
  const withAbility=fixture({abilities_all:'てきおうりょく'}),without=fixture({});
  assert.equal(api.getStab(withAbility,'でんき'),1.5);
  const move={type:'でんき',category:'special',power:90};
  assert.deepEqual(plain(api.calculateDamagePercent(withAbility,fixture({type1:'みず'}),move)),plain(api.calculateDamagePercent(without,fixture({type1:'みず'}),move)));
});

test('タイプ・威力・種族値が未確認なら等倍やNaNで計算しない', () => {
  const move={type:'でんき',category:'special',power:90};
  assert.equal(api.getComboMultiplier('未確認','みず'),null);
  assert.equal(api.calculateDamagePercent(fixture({sp_attack:null}),fixture({type1:'みず'}),move),null);
  assert.equal(api.calculateDamagePercent(fixture({}),fixture({type1:null}),move),null);
  assert.equal(api.calculateDamagePercent(fixture({}),fixture({type1:'みず'}),{...move,power:0}),null);
});

test('v7原本と旧HTMLの保管時のハッシュを維持', () => {
  for (const line of read('originals/SHA256SUMS').trim().split('\n')) {
    const [hash,file]=line.split(/\s+/);
    assert.equal(crypto.createHash('sha256').update(read(file)).digest('hex'),hash,file);
  }
});
