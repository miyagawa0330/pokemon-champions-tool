// 画面を使わずに検証できる、v7と同じ検索・計算処理。
(function () {
  "use strict";
  const DATA = window.PokemonAppData;
  const TYPE_CHART_DEFENSE = DATA.typeChartDefense, ALL_TYPES = DATA.allTypes, SETTINGS = DATA.settings;
    function getComboMultiplier(attackType, defenseType1, defenseType2='') {
      const m1 = (TYPE_CHART_DEFENSE[defenseType1] && TYPE_CHART_DEFENSE[defenseType1][attackType] !== undefined)
        ? TYPE_CHART_DEFENSE[defenseType1][attackType] : 1.0;
      const m2 = defenseType2 && TYPE_CHART_DEFENSE[defenseType2] && TYPE_CHART_DEFENSE[defenseType2][attackType] !== undefined
        ? TYPE_CHART_DEFENSE[defenseType2][attackType] : 1.0;
      return m1 * m2;
    }

    function classifyPokemonDefense(pokemon) {
      const groups = {'4倍':[], '2倍':[], '等倍':[], '1/2倍':[], '1/4倍':[], '無効':[]};
      ALL_TYPES.forEach(type => {
        const value = getComboMultiplier(type, pokemon.type1, pokemon.type2);
        if (value === 4) groups['4倍'].push(type);
        else if (value === 2) groups['2倍'].push(type);
        else if (value === 1) groups['等倍'].push(type);
        else if (value === 0.5) groups['1/2倍'].push(type);
        else if (value === 0.25) groups['1/4倍'].push(type);
        else if (value === 0) groups['無効'].push(type);
      });
      return groups;
    }

    function classifyValues(mode, selectedType) {
      const groups = {'2倍':[], '等倍':[], '1/2倍':[], '無効':[]};
      ALL_TYPES.forEach(type => {
        const value = mode === 'attack'
          ? getComboMultiplier(selectedType, type, '')
          : getComboMultiplier(type, selectedType, '');
        if (value === 2) groups['2倍'].push(type);
        else if (value === 1) groups['等倍'].push(type);
        else if (value === 0.5) groups['1/2倍'].push(type);
        else if (value === 0) groups['無効'].push(type);
      });
      return groups;
    }

    function calculateActualStat(base, isHp=false) {
      const level = SETTINGS.level, iv = SETTINGS.iv, sp = SETTINGS.sp;
      if (isHp) return Math.floor(((2 * base + iv + (sp * 2)) * level) / 100) + level + 10;
      return Math.floor(((2 * base + iv + (sp * 2)) * level) / 100) + 5;
    }

    function getStab(attacker, moveType) {
      if (attacker.type1 !== moveType && attacker.type2 !== moveType) return 1.0;
      const abilities = `${attacker.abilities_all || ''} ${attacker.ability1 || ''} ${attacker.ability2 || ''} ${attacker.hidden_ability || ''}`;
      return abilities.includes('てきおうりょく') ? 2.0 : 1.5;
    }

    function getMovePower(move) {
      if (!move || move.category === 'status' || move.power === null || move.power === undefined || move.power === '') return null;
      if (move.special_rule === 'acrobatics') return Number(move.power) * 2;
      return Number(move.power);
    }

    function calculateDamagePercent(attacker, defender, move) {
      const typeMultiplier = getComboMultiplier(move.type, defender.type1, defender.type2);
      const defenderHp = calculateActualStat(Number(defender.hp), true);
      if (typeMultiplier === 0) {
        return { min: 0, max: 0, ohkoChance: 0, ohkoCount: 0, rollCount: 16, typeMultiplier, power: getMovePower(move) };
      }

      let attackBase, defenseBase;
      if (move.special_rule === 'defense_attack') {
        attackBase = Number(attacker.defense);
        defenseBase = Number(defender.defense);
      } else if (move.special_rule === 'target_attack') {
        attackBase = Number(defender.attack);
        defenseBase = Number(defender.defense);
      } else if (move.category === 'physical') {
        attackBase = Number(attacker.attack);
        defenseBase = Number(defender.defense);
      } else if (move.category === 'special') {
        attackBase = Number(attacker.sp_attack);
        defenseBase = move.special_rule === 'physical_defense' ? Number(defender.defense) : Number(defender.sp_defense);
      } else {
        return null;
      }

      const attackStat = calculateActualStat(attackBase, false);
      const defenseStat = calculateActualStat(defenseBase, false);
      const power = getMovePower(move);
      if (!power || !attackStat || !defenseStat) return null;

      const stab = getStab(attacker, move.type);
      const modifierWithoutRandom = stab * typeMultiplier;
      const baseDamage = Math.floor(Math.floor(Math.floor(((Math.floor((2 * SETTINGS.level) / 5) + 2) * power * attackStat) / defenseStat) / 50) + 2);
      const rolls = [];
      for (let r = 85; r <= 100; r++) {
        rolls.push(Math.max(1, Math.floor(baseDamage * modifierWithoutRandom * r / 100)));
      }
      const percents = rolls.map(v => v / defenderHp * 100);
      const ohkoCount = rolls.filter(v => v >= defenderHp).length;
      return {
        min: Math.min(...percents),
        max: Math.max(...percents),
        ohkoChance: ohkoCount / rolls.length * 100,
        ohkoCount,
        rollCount: rolls.length,
        typeMultiplier,
        power
      };
    }


  window.PokemonTool = window.PokemonTool || {};
  Object.assign(window.PokemonTool, { getComboMultiplier, classifyPokemonDefense, classifyValues, calculateActualStat, getStab, getMovePower, calculateDamagePercent });
})();
