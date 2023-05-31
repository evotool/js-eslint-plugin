const chalk = require('chalk');

function getAllRuleNames(path, prefix, pack) {
  const { rules } = pack
    ? {
        rules: Object.fromEntries(
          Array.from(require(path).entries())
            .map(([ruleId, rule]) => (rule.meta.deprecated ? null : [ruleId, 'error']))
            .filter(Boolean),
        ),
      }
    : require(path);

  const all = Object.keys(rules).filter((n) => !rules[n].meta?.deprecated);
  const deprecated = all.filter((n) => rules[n].meta?.deprecated);

  if (prefix) {
    return {
      all: all.map((r) => `${prefix}/${r}`),
      deprecated: deprecated.map((r) => `${prefix}/${r}`),
    };
  }

  return { all, deprecated };
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

const { allRules, allDeprecatedRules } = [
  getAllRuleNames('../node_modules/eslint/lib/rules', undefined, true),
  getAllRuleNames('../node_modules/@typescript-eslint/eslint-plugin', '@typescript-eslint'),
  getAllRuleNames('../node_modules/eslint-plugin-import', 'import'),
  getAllRuleNames('../node_modules/eslint-plugin-react', 'react'),
  getAllRuleNames('../node_modules/eslint-plugin-lodash', 'lodash'),
  getAllRuleNames('../node_modules/eslint-plugin-react-hooks', 'react-hooks'),
  getAllRuleNames('../node_modules/eslint-plugin-unused-imports', 'unused-imports'),
].reduce(
  (p, n) => {
    p.allRules.push(...n.all);
    p.allDeprecatedRules.push(...n.deprecated);

    return p;
  },
  { allRules: [], allDeprecatedRules: [] },
);

allRules.sort(sortFn);
allDeprecatedRules.sort(sortFn);

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
const deprecatedRules = currentRules.filter((cr) => allDeprecatedRules.some((ar) => cr === ar));

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
