export default {
	parser: '@typescript-eslint/parser',
	parserOptions: { sourceType: 'module' },
	plugins: ['@typescript-eslint', 'import'],
	extends: [
		'plugin:import/typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	rules: {
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': false }],
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-duplicate-imports': 'error',
		'@typescript-eslint/no-inferrable-types': ['error', { ignoreProperties: true, ignoreParameters: true }],
		'@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'@typescript-eslint/return-await': 'error',
		'@typescript-eslint/semi': ['error', 'always'],

		'@typescript-eslint/ban-types': [
			'warn',
			{
				types: {
				},
				extendDefaults: false,
			},
		],
		'@typescript-eslint/brace-style': ['warn', '1tbs'],
		'@typescript-eslint/class-literal-property-style': 'warn',
		'@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
		'@typescript-eslint/comma-spacing': 'warn',
		'@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
		'@typescript-eslint/func-call-spacing': 'warn',
		'@typescript-eslint/indent': [
			'warn',
			'tab',
			{ SwitchCase: 1, FunctionDeclaration: { parameters: 'first' }, FunctionExpression: { parameters: 'first' } },
		],
		'@typescript-eslint/keyword-spacing': 'warn',
		'@typescript-eslint/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{ multiline: { delimiter: 'semi', requireLast: true }, singleline: { delimiter: 'semi', requireLast: false } },
		],
		'@typescript-eslint/member-ordering': [
			'warn',
			{
				default: ['abstract-field', 'abstract-method', 'static-field', 'instance-field', 'constructor', 'instance-method', 'static-method'],
			},
		],
		'@typescript-eslint/method-signature-style': ['warn', 'method'],
		'@typescript-eslint/no-extra-parens': [
			'warn',
			'all',
			{
				returnAssign: false,
				nestedBinaryExpressions: false,
				enforceForSequenceExpressions: false,
				ignoreJSX: 'multi-line',
			},
		],
		'@typescript-eslint/no-invalid-this': 'warn',
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true }],
		'@typescript-eslint/no-use-before-define': 'warn',
		'@typescript-eslint/prefer-readonly': 'warn',
		'@typescript-eslint/require-await': 'warn',
		'@typescript-eslint/restrict-plus-operands': ['warn', { checkCompoundAssignments: true }],
		'@typescript-eslint/space-before-function-paren': ['warn', { asyncArrow: 'always', anonymous: 'always',  named: 'never' }],
		'@typescript-eslint/space-infix-ops': 'warn',
		'@typescript-eslint/switch-exhaustiveness-check': 'warn',
		'@typescript-eslint/type-annotation-spacing': 'warn',
		'@typescript-eslint/typedef': [
			'warn',
			{
				arrowParameter: false,
				variableDeclarationIgnoreFunction: true,
				objectDestructuring: false,
				arrayDestructuring: false,
				memberVariableDeclaration: false,
			},
		],

		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-redeclare': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/prefer-namespace-keyword': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/unbound-method': 'off',

		'brace-style': 'off',
		'comma-dangle': 'off',
		'comma-spacing': 'off',
		'default-param-last': 'off',
		'func-call-spacing': 'off',
		'indent': 'off',
		'keyword-spacing': 'off',
		'lines-between-class-members': 'off',
		'no-dupe-class-members': 'off',
		'no-duplicate-imports': 'off',
		'no-empty-function': 'off',
		'no-extra-parens': 'off',
		'no-invalid-this': 'off',
		'no-prototype-builtins': 'off',
		'no-return-await': 'off',
		'no-use-before-define': 'off',
		'require-await': 'off',
		'require-jsdoc': 'off',
		'semi': 'off',
		'space-before-function-paren': 'off',
		'space-infix-ops': 'off',
		'valid-jsdoc': 'off',
	},
};
