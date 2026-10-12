// 画面の表示と操作。検索・計算は別ファイルの処理を呼びます。
(function () {
  "use strict";
  const { kataToHira, normalize, getPokemonByExactName, searchPokemonByName, getMoveByExactName, searchMoveByName, getComboMultiplier, classifyPokemonDefense, classifyValues, calculateActualStat, getStab, getMovePower, calculateDamagePercent } = window.PokemonTool;
    const DATA = window.PokemonAppData;
    const POKEMON = DATA.pokemon;
    const TYPE_CHART_DEFENSE = DATA.typeChartDefense;
    const ALL_TYPES = DATA.allTypes;
    const MOVES = DATA.moves;
    const MOVE_ALIASES = DATA.moveAliases || {};
    const SETTINGS = DATA.settings;

    const CATEGORY_LABEL = {
      physical: '物理',
      special: '特殊',
      status: '変化'
    };

    const SPECIAL_RULE_LABEL = {
      acrobatics: '道具なし前提で、ダメージ計算では威力2倍として扱います。',
      defense_attack: 'ダメージ計算では、攻撃側の「ぼうぎょ」を攻撃能力として扱います。',
      target_attack: 'ダメージ計算では、防御側の「こうげき」を攻撃能力として扱います。',
      physical_defense: 'ダメージ計算では、特殊技ですが相手の「ぼうぎょ」を参照します。'
    };

    function escapeHtml(value) {
      return String(value ?? '').replace(/[&<>"']/g, ch => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[ch]));
    }

    function renderError(message) {
      return `<div class="result-card error">${escapeHtml(message)}</div>`;
    }

    function formatTypeText(pokemon) {
      return pokemon.type2 ? `${pokemon.type1} / ${pokemon.type2}` : pokemon.type1;
    }

    function populateInputs() {
      document.querySelector('.badge').textContent = `${POKEMON.length}体 / 技${MOVES.length}種`;
      document.querySelector('.footer-note').textContent = `計算条件: Lv.${SETTINGS.level} / 個体値${SETTINGS.iv}相当 / 参照する能力は能力ポイント${SETTINGS.sp}相当 / 性格補正なし / 道具補正なし。技検索は技名のみで絞り込みます。データ: レギュレーション${DATA.sources.regulation}対応、${DATA.sources.checked_at}確認。`;
      const pokemonList = document.getElementById('pokemonNames');
      const moveList = document.getElementById('moveNames');
      pokemonList.innerHTML = POKEMON.map(p => `<option value="${escapeHtml(p.name)}"></option>`).join('');
      moveList.innerHTML = MOVES.map(m => `<option value="${escapeHtml(m.name)}"></option>`).join('');
      const typeSelect = document.getElementById('typeSelect');
      typeSelect.innerHTML = ALL_TYPES.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join('');
    }

    function renderPokemonTypeMatchup(pokemon) {
      const groups = classifyPokemonDefense(pokemon);
      const htmlGroups = ['4倍','2倍','等倍','1/2倍','1/4倍','無効'].map(label => `
        <div class="match-group"><div class="match-title">${label}</div>
          <div class="chip-list">${groups[label].length ? groups[label].map(v => `<span class="chip">${escapeHtml(v)}</span>`).join('') : '<span class="chip">なし</span>'}</div>
        </div>`).join('');
      return `<div class="type-matchup-block">
        <div class="match-title">このポケモンが受けるタイプ相性</div>
        ${htmlGroups}
      </div>`;
    }

    function renderPokemonCard(pokemon) {
      const total = ['hp','attack','defense','sp_attack','sp_defense','speed'].reduce((sum, key) => sum + Number(pokemon[key] || 0), 0);
      const typeHtml = `<span class="type-pill">${escapeHtml(pokemon.type1)}</span>${pokemon.type2 ? `<span class="type-pill">${escapeHtml(pokemon.type2)}</span>` : ''}`;
      return `<div class="result-card success">
        <div class="name-line">
          <div class="poke-name">${escapeHtml(pokemon.name)}</div>
          <div class="types">${typeHtml}</div>
        </div>
        <p><strong>特性:</strong> ${escapeHtml(pokemon.abilities_all || '未登録')}</p>
        <p class="mini">${escapeHtml(pokemon.abilities_description_all || '')}</p>
        <table class="stats">
          <tr><th>HP</th><td>${pokemon.hp}</td><th>こうげき</th><td>${pokemon.attack}</td></tr>
          <tr><th>ぼうぎょ</th><td>${pokemon.defense}</td><th>とくこう</th><td>${pokemon.sp_attack}</td></tr>
          <tr><th>とくぼう</th><td>${pokemon.sp_defense}</td><th>すばやさ</th><td>${pokemon.speed}</td></tr>
          <tr><th>合計</th><td colspan="3">${total}</td></tr>
        </table>
        ${renderPokemonTypeMatchup(pokemon)}
      </div>`;
    }

    function renderPokemonSearch() {
      const keyword = document.getElementById('searchName').value;
      const result = document.getElementById('searchResult');
      const results = searchPokemonByName(keyword);
      if (!normalize(keyword)) {
        result.innerHTML = renderError('ポケモン名を入力してください。');
        return;
      }
      if (!results.length) {
        result.innerHTML = renderError('該当するポケモンが見つかりませんでした。');
        return;
      }
      result.innerHTML = results.map(renderPokemonCard).join('');
    }

    function compareTwoPokemon() {
      const a = getPokemonByExactName(document.getElementById('compareA').value);
      const b = getPokemonByExactName(document.getElementById('compareB').value);
      const result = document.getElementById('compareResult');
      if (!a || !b) {
        result.innerHTML = renderError('2匹とも候補から正確な名前を選んでください。');
        return;
      }
      const rows = [
        ['HP','hp'],
        ['こうげき','attack'],
        ['ぼうぎょ','defense'],
        ['とくこう','sp_attack'],
        ['とくぼう','sp_defense'],
        ['すばやさ','speed']
      ];
      const totalA = rows.reduce((s, [,k]) => s + Number(a[k]), 0);
      const totalB = rows.reduce((s, [,k]) => s + Number(b[k]), 0);
      const body = rows.map(([label,key]) => {
        const av = Number(a[key]), bv = Number(b[key]);
        const diff = av - bv;
        const verdict = diff > 0 ? `${escapeHtml(a.name)} +${diff}` : diff < 0 ? `${escapeHtml(b.name)} +${Math.abs(diff)}` : '同じ';
        return `<tr><th>${label}</th><td>${av}</td><td>${bv}</td><td>${verdict}</td></tr>`;
      }).join('') + `<tr><th>合計</th><td>${totalA}</td><td>${totalB}</td><td>${totalA===totalB ? '同じ' : totalA > totalB ? `${escapeHtml(a.name)} +${totalA-totalB}` : `${escapeHtml(b.name)} +${totalB-totalA}`}</td></tr>`;
      result.innerHTML = `<div class="result-card success">
        <div class="poke-name">${escapeHtml(a.name)} vs ${escapeHtml(b.name)}</div>
        <table class="stats">
          <tr><th>項目</th><th>${escapeHtml(a.name)}</th><th>${escapeHtml(b.name)}</th><th>比較</th></tr>
          ${body}
        </table>
      </div>`;
    }

    function renderTypeMatchup() {
      const mode = document.getElementById('typeMode').value;
      const type = document.getElementById('typeSelect').value;
      const result = document.getElementById('typeResult');
      if (!ALL_TYPES.includes(type)) {
        result.innerHTML = renderError('タイプを選択してください。');
        return;
      }
      const groups = classifyValues(mode, type);
      const title = mode === 'attack' ? `${type}技で攻撃した場合` : `${type}タイプで受ける場合`;
      const htmlGroups = ['2倍','等倍','1/2倍','無効'].map(label => `
        <div class="match-group"><div class="match-title">${label}</div>
          <div class="chip-list">${groups[label].length ? groups[label].map(v => `<span class="chip">${escapeHtml(v)}</span>`).join('') : '<span class="chip">なし</span>'}</div>
        </div>`).join('');
      result.innerHTML = `<div class="result-card success"><div class="poke-name">${escapeHtml(title)}</div>${htmlGroups}</div>`;
    }

    function renderDamage() {
      const attacker = getPokemonByExactName(document.getElementById('attackerName').value);
      const defender = getPokemonByExactName(document.getElementById('defenderName').value);
      const move = getMoveByExactName(document.getElementById('moveName').value);
      const result = document.getElementById('damageResult');
      if (!attacker || !defender || !move) {
        result.innerHTML = renderError('攻撃側、防御側、技を候補から正確に選んでください。');
        return;
      }
      const output = calculateDamagePercent(attacker, defender, move);
      if (!output) {
        result.innerHTML = renderError('この技はダメージ計算対象外です。');
        return;
      }
      result.innerHTML = `<div class="result-card success">
        <div class="mini">${escapeHtml(attacker.name)} → ${escapeHtml(defender.name)} / ${escapeHtml(move.name)}（${escapeHtml(move.type)}・${escapeHtml(CATEGORY_LABEL[move.category] || move.category)}・威力${output.power}）</div>
        <div class="damage-output">${output.min.toFixed(1)}%〜${output.max.toFixed(1)}%</div>
        <p class="mini">100%以上の確率: ${output.ohkoCount}/${output.rollCount}（${output.ohkoChance.toFixed(1)}%） / タイプ相性: ${output.typeMultiplier}倍</p>
        <p class="mini">計算条件: Lv.${SETTINGS.level} / 個体値${SETTINGS.iv}相当 / 能力ポイント${SETTINGS.sp}相当 / 性格補正なし / 道具補正なし</p>
      </div>`;
    }

    function getMoveEffect(move) {
      if (move.effect) return move.effect;
      if (move.special_rule && SPECIAL_RULE_LABEL[move.special_rule]) return SPECIAL_RULE_LABEL[move.special_rule];
      return '効果説明は未登録です。タイプ・分類・威力のみ登録されています。';
    }

    function renderMoveCard(move) {
      const ruleText = move.category === 'status' ? 'ダメージ計算対象外' : (move.special_rule ? (SPECIAL_RULE_LABEL[move.special_rule] || move.special_rule) : '通常処理');
      const calcPower = getMovePower(move);
      const powerText = calcPower == null ? '—' : (calcPower !== Number(move.power) ? `${move.power}（計算時 ${calcPower}）` : String(move.power));
      return `<div class="result-card success">
        <div class="name-line">
          <div class="move-name">${escapeHtml(move.name)}</div>
          <div class="types"><span class="type-pill">${escapeHtml(move.type)}</span><span class="type-pill">${escapeHtml(CATEGORY_LABEL[move.category] || move.category)}</span></div>
        </div>
        <div class="move-meta">
          <div class="meta-box"><span class="meta-label">タイプ</span><span class="meta-value">${escapeHtml(move.type)}</span></div>
          <div class="meta-box"><span class="meta-label">分類</span><span class="meta-value">${escapeHtml(CATEGORY_LABEL[move.category] || move.category)}</span></div>
          <div class="meta-box"><span class="meta-label">威力</span><span class="meta-value">${escapeHtml(powerText)}</span></div>
          <div class="meta-box"><span class="meta-label">登録</span><span class="meta-value">チャンピオンズ</span></div>
        </div>
        <p class="effect-text"><strong>効果:</strong> ${escapeHtml(getMoveEffect(move))}</p>
        <p class="mini"><strong>計算上の備考:</strong> ${escapeHtml(ruleText)}</p>
      </div>`;
    }

    function renderMoveSearch() {
      const keyword = document.getElementById('moveSearchName').value;
      const result = document.getElementById('moveSearchResult');
      if (!normalize(keyword)) {
        result.innerHTML = renderError('技名を入力してください。');
        return;
      }
      const results = searchMoveByName(keyword);
      if (!results.length) {
        result.innerHTML = renderError('該当する技が見つかりませんでした。');
        return;
      }
      result.innerHTML = results.map(renderMoveCard).join('');
    }

    function getEffectiveInputValue(input, composingText = '') {
      const value = input.value || '';
      const comp = composingText || '';
      if (!comp) return value;
      const valueKey = normalize(value);
      const compKey = normalize(comp);
      if (!compKey) return value;
      if (!valueKey) return comp;
      if (valueKey.includes(compKey)) return value;
      return value + comp;
    }

    function hideAllSuggestions(exceptBox = null) {
      document.querySelectorAll('.suggestions').forEach(box => {
        if (box !== exceptBox) box.hidden = true;
      });
    }

    function renderSuggestionButton(item, kind) {
      const title = kind === 'move' ? item.name : item.name;
      const sub = kind === 'move'
        ? `${item.type} / ${CATEGORY_LABEL[item.category] || item.category} / 威力${item.power}`
        : `${formatTypeText(item)} / ${item.abilities_all || '特性未登録'}`;
      return `<button type="button" class="suggestion-btn" data-name="${escapeHtml(title)}">${escapeHtml(title)}<span class="suggestion-sub">${escapeHtml(sub)}</span></button>`;
    }

    function setupAutocomplete(inputId, searchFn, kind, onSelect = null) {
      const input = document.getElementById(inputId);
      if (!input || input.dataset.autocompleteReady === '1') return;
      input.dataset.autocompleteReady = '1';

      const wrapper = document.createElement('div');
      wrapper.className = 'autocomplete-wrap';
      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);

      const box = document.createElement('div');
      box.className = 'suggestions';
      box.hidden = true;
      wrapper.appendChild(box);

      const update = (composingText = '') => {
        const query = getEffectiveInputValue(input, composingText);
        const key = normalize(query);
        if (!key) {
          box.hidden = true;
          box.innerHTML = '';
          return;
        }
        const results = searchFn(query).slice(0, 8);
        if (!results.length) {
          box.hidden = true;
          box.innerHTML = '';
          return;
        }
        box.innerHTML = results.map(item => renderSuggestionButton(item, kind)).join('');
        box.hidden = false;
        hideAllSuggestions(box);
      };

      input.addEventListener('input', () => update());
      input.addEventListener('compositionupdate', event => update(event.data || ''));
      input.addEventListener('compositionend', () => update());
      input.addEventListener('focus', () => update());

      box.addEventListener('pointerdown', event => {
        const button = event.target.closest('.suggestion-btn');
        if (!button) return;
        event.preventDefault();
        input.value = button.dataset.name || '';
        box.hidden = true;
        if (typeof onSelect === 'function') onSelect();
      });
    }

    function bindEvents() {
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
          btn.classList.add('active');
          document.getElementById(btn.dataset.tab).classList.add('active');
        });
      });

      document.getElementById('searchBtn').addEventListener('click', renderPokemonSearch);
      document.getElementById('compareBtn').addEventListener('click', compareTwoPokemon);
      document.getElementById('typeBtn').addEventListener('click', renderTypeMatchup);
      document.getElementById('damageBtn').addEventListener('click', renderDamage);
      document.getElementById('moveSearchBtn').addEventListener('click', renderMoveSearch);

      document.getElementById('searchName').addEventListener('keydown', e => { if (e.key === 'Enter') renderPokemonSearch(); });
      document.getElementById('compareA').addEventListener('keydown', e => { if (e.key === 'Enter') compareTwoPokemon(); });
      document.getElementById('compareB').addEventListener('keydown', e => { if (e.key === 'Enter') compareTwoPokemon(); });
      document.getElementById('attackerName').addEventListener('keydown', e => { if (e.key === 'Enter') renderDamage(); });
      document.getElementById('defenderName').addEventListener('keydown', e => { if (e.key === 'Enter') renderDamage(); });
      document.getElementById('moveName').addEventListener('keydown', e => { if (e.key === 'Enter') renderDamage(); });
      document.getElementById('moveSearchName').addEventListener('keydown', e => { if (e.key === 'Enter') renderMoveSearch(); });

      setupAutocomplete('searchName', searchPokemonByName, 'pokemon');
      setupAutocomplete('compareA', searchPokemonByName, 'pokemon');
      setupAutocomplete('compareB', searchPokemonByName, 'pokemon');
      setupAutocomplete('attackerName', searchPokemonByName, 'pokemon');
      setupAutocomplete('defenderName', searchPokemonByName, 'pokemon');
      setupAutocomplete('moveName', searchMoveByName, 'move');
      setupAutocomplete('moveSearchName', searchMoveByName, 'move', renderMoveSearch);

      document.addEventListener('pointerdown', event => {
        if (!event.target.closest('.autocomplete-wrap')) hideAllSuggestions();
      });
    }

    populateInputs();
    bindEvents();
})();
