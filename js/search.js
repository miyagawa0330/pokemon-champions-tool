// 画面を使わずに検証できる、v7と同じ検索・計算処理。
(function () {
  "use strict";
  const DATA = window.PokemonAppData;
  const POKEMON = DATA.pokemon, MOVES = DATA.moves, MOVE_ALIASES = DATA.moveAliases || {};
    function kataToHira(value) {
      return String(value ?? '').replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
    }

    function normalize(value) {
      return kataToHira(String(value ?? '').normalize('NFKC'))
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '');
    }

    const NORMALIZED_MOVE_ALIASES = {};
    Object.entries(MOVE_ALIASES).forEach(([alias, canonicalName]) => {
      NORMALIZED_MOVE_ALIASES[normalize(alias)] = canonicalName;
    });

    function getPokemonByExactName(name) {
      const key = normalize(name);
      return POKEMON.find(p => normalize(p.name) === key) || null;
    }

    function searchPokemonByName(keyword) {
      const key = normalize(keyword);
      if (!key) return [];
      const exact = POKEMON.filter(p => normalize(p.name) === key);
      const partial = POKEMON.filter(p => normalize(p.name).includes(key) && !exact.includes(p));
      return exact.concat(partial).slice(0, 20);
    }

    function getMoveByExactName(name) {
      const key = normalize(name);
      const aliasName = NORMALIZED_MOVE_ALIASES[key];
      if (aliasName) {
        return MOVES.find(m => m.name === aliasName) || null;
      }
      return MOVES.find(m => normalize(m.name) === key) || null;
    }

    function searchMoveByName(keyword) {
      const key = normalize(keyword);
      if (!key) return [];
      const exact = [];
      const exactMove = getMoveByExactName(keyword);
      if (exactMove) exact.push(exactMove);
      const partial = MOVES.filter(m => normalize(m.name).includes(key) && !exact.includes(m));
      return exact.concat(partial).slice(0, 40);
    }


  window.PokemonTool = window.PokemonTool || {};
  Object.assign(window.PokemonTool, { kataToHira, normalize, getPokemonByExactName, searchPokemonByName, getMoveByExactName, searchMoveByName });
})();
