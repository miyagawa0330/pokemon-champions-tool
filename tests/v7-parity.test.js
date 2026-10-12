// v7からの分割作業専用。将来の意図的なデータ更新後は通常の core.test.js を使います。
const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { loadApp, loadV7, plain, read } = require('./helpers.cjs');
const {data,api} = loadApp();
const original = loadV7();

test('保管したv7原本は添付時のSHA-256と一致', () => {
  const hash = crypto.createHash('sha256').update(read('originals/pokemon_champions_webapp_v7_regulation_mb.html')).digest('hex');
  assert.equal(hash, read('originals/SHA256SUMS').split('\n').find(line => line.endsWith('pokemon_champions_webapp_v7_regulation_mb.html')).split(' ')[0]);
});
test('v7の全データを欠けなくそのまま分離', () => assert.deepEqual(plain(data), original.data));
test('検索結果の順序・件数・別名はv7と同じ', () => {
  for (const item of data.pokemon) {
    for (const key of [item.name,item.name.slice(0,2),api.kataToHira(item.name)]) {
      assert.deepEqual(plain(api.searchPokemonByName(key)),plain(original.api.searchPokemonByName(key)));
    }
  }
  for (const key of [...data.moves.map(m=>m.name),...Object.keys(data.moveAliases)]) {
    assert.deepEqual(plain(api.searchMoveByName(key)),plain(original.api.searchMoveByName(key)));
  }
});
test('全ポケモンの防御相性と、18タイプの攻撃/防御分類はv7と同じ', () => {
  for (const pokemon of data.pokemon) assert.deepEqual(plain(api.classifyPokemonDefense(pokemon)),plain(original.api.classifyPokemonDefense(pokemon)));
  for (const type of data.allTypes) for (const mode of ['attack','defense']) assert.deepEqual(plain(api.classifyValues(mode,type)),plain(original.api.classifyValues(mode,type)));
});
