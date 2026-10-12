const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const plain = value => JSON.parse(JSON.stringify(value));
function loadApp() {
  const context = vm.createContext({ window: {} });
  for (const file of ['data/pokemon.js', 'data/moves.js', 'data/types.js', 'data/settings.js', 'js/search.js', 'js/calculations.js']) {
    vm.runInContext(read(file), context, { filename: file });
  }
  return { data: context.window.PokemonAppData, api: context.window.PokemonTool };
}
function loadV7(dataOverride) {
  const html = read('originals/pokemon_champions_webapp_v7_regulation_mb.html');
  const dataText = html.match(/<script type="application\/json" id="app-data">([\s\S]*?)<\/script>/)[1];
  const data = dataOverride || JSON.parse(dataText);
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1]
    .replace(/\s*populateInputs\(\);\s*bindEvents\(\);\s*$/, '');
  const context = vm.createContext({document: {getElementById: id => {
    if (id !== 'app-data') throw new Error('Unexpected DOM access: ' + id);
    return {textContent: JSON.stringify(data)};
  }}});
  vm.runInContext(script, context, {filename: 'original-v7.js'});
  return {data, api: context};
}
module.exports = { root, read, plain, loadApp, loadV7 };
