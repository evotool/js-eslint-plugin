const chalk = require('chalk');

function getAllRules(path, prefix) {
  const rules = Object.keys(require(path).rules);

  if (prefix) {
    return rules.map((r) => `${prefix}/${r}`);
  }

  return rules;
}

function getCurrentRules(path) {
  return Object.keys(require(path).default.rules);
}

const sortFn = (a, b) =>
  a.includes('/') && !b.includes('/')
    ? -1
    : !a.includes('/') && b.includes('/')
    ? 1
    : a < b
    ? -1
    : b > a
    ? 1
    : 0;

const allRules = [
  ...new Set(
    [
      getAllRules('../node_modules/eslint/conf/eslint-all'),
      getAllRules('../node_modules/@typescript-eslint/eslint-plugin', '@typescript-eslint'),
      getAllRules('../node_modules/eslint-plugin-import', 'import'),
      getAllRules('../node_modules/eslint-plugin-react', 'react'),
      getAllRules('../node_modules/eslint-plugin-react-hooks', 'react-hooks'),
      getAllRules('../node_modules/eslint-plugin-unused-imports', 'unused-imports'),
    ].flat(),
  ),
].sort(sortFn);

const currentRules = [
  ...new Set(
    [
      getCurrentRules('../dist/configs/ecmascript'),
      getCurrentRules('../dist/configs/typescript'),
      getCurrentRules('../dist/configs/react'),
    ].flat(),
  ),
].sort(sortFn);

const newRules = allRules.filter((ar) => !currentRules.some((cr) => cr === ar));
const deprecatedRules = currentRules.filter((cr) => !allRules.some((ar) => cr === ar));

console.log('Checking rules:');

for (const r of allRules) {
  if (newRules.includes(r)) {
    console.log(chalk.green(r));
  } else if (deprecatedRules.includes(r)) {
    console.log(chalk.red(r));
  } else {
    console.log(chalk.gray(r));
  }
}

console.log(`
New: ${newRules.length}; deprecated: ${deprecatedRules.length}
`);

if (newRules.length || deprecatedRules.length) {
  console.warn('New or deprecated rules detected.');

  process.exit(1);
}
