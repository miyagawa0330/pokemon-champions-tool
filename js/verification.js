// 出典の照合と、現レギュレーションでの利用可否を混同しない。
(function () {
  'use strict';
  const DATA = window.PokemonAppData;
  function getRegulationAvailability(name, at = new Date()) {
    const rule = DATA.review.current_regulation;
    if (rule.status !== 'verified' || !rule.id || !Array.isArray(rule.eligible_pokemon) ||
        !rule.official_source_urls?.length || !rule.starts_at || !rule.ends_at) return 'unverified';
    const start = Date.parse(rule.starts_at), end = Date.parse(rule.ends_at), now = at.getTime();
    if (![start, end, now].every(Number.isFinite) || start >= end || now < start || now >= end) return 'unverified';
    return rule.eligible_pokemon.includes(name) ? 'available' : 'unavailable';
  }
  function getRecordReview(kind, name) {
    return DATA.review[kind]?.[name] || {origin: 'unknown', current_eligibility: 'unverified'};
  }
  window.PokemonTool = window.PokemonTool || {};
  Object.assign(window.PokemonTool, {getRegulationAvailability, getRecordReview});
})();
