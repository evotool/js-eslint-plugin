export default {
	plugins: ['import'],
	extends: ['eslint:recommended', 'plugin:import/recommended'],
	rules: {
		'import/no-deprecated': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/no-unused-modules': 'error',
		'import/no-useless-path-segments': 'error',
		'import/order': [
			'warn',
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				groups: [
					['builtin', 'external', 'internal', 'unknown'],
					['parent', 'sibling', 'index'],
				],
				'newlines-between': 'always',
			},
		],

		'arrow-parens': ['error', 'always'],
		'curly': ['error'],
		'default-param-last': 'error',
		'eol-last': 'error',
		'eqeqeq': ['error', 'smart'],
		'guard-for-in': 'error',
		'linebreak-style': ['error', 'unix'],
		'new-parens': 'error',
		'no-caller': 'error',
		'no-duplicate-imports': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-restricted-imports': 'error',
		'no-restricted-syntax': ['error', 'WithStatement'],
		'no-return-await': 'error',
		'no-undef-init': 'error',
		'no-unneeded-ternary': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'prefer-object-spread': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'radix': 'error',
		'symbol-description': 'error',
		'unicode-bom': ['error', 'never'],

		'array-bracket-newline': 'warn',
		'array-bracket-spacing': ['warn', 'never'],
		'arrow-body-style': 'warn',
		'arrow-spacing': 'warn',
		'block-spacing': ['warn', 'always'],
		'brace-style': ['warn', '1tbs'],
		'comma-dangle': ['warn', 'always-multiline'],
		'comma-spacing': 'warn',
		'comma-style': 'warn',
		'computed-property-spacing': ['warn', 'never'],
		'func-call-spacing': 'warn',
		'function-call-argument-newline': ['warn', 'consistent'],
		'function-paren-newline': ['warn', 'multiline-arguments'],
		'generator-star-spacing': ['warn', 'after'],
		'id-blacklist': 'warn',
		'indent': [
			'warn',
			'tab',
			{
				SwitchCase: 1,
				FunctionDeclaration: { parameters: 'first' },
				FunctionExpression: { parameters: 'first' },
			},
		],
		'jsx-quotes': 'warn',
		'key-spacing': 'warn',
		'keyword-spacing': 'warn',
		'lines-around-comment': ['warn', { allowBlockStart: true }],
		'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
		'max-statements-per-line': 'warn',
		'no-invalid-this': 'warn',
		'no-lonely-if': 'warn',
		'no-mixed-operators': 'warn',
		'no-multi-assign': 'warn',
		'no-multi-spaces': 'warn',
		'no-multi-str': 'warn',
		'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0 }],
		'no-negated-condition': 'warn',
		'no-restricted-globals': 'warn',
		'no-tabs': ['warn', { allowIndentationTabs: true }],
		'no-throw-literal': 'warn',
		'no-trailing-spaces': 'warn',
		'no-unused-vars': ['warn', { args: 'none' }],
		'no-useless-computed-key': 'warn',
		'no-useless-rename': 'warn',
		'no-whitespace-before-property': 'warn',
		'nonblock-statement-body-position': 'warn',
		'object-curly-newline': [
			'warn',
			{
				ObjectExpression: { multiline: true, minProperties: 10, consistent: true },
				ImportDeclaration: { multiline: true, consistent: true },
				ExportDeclaration: { multiline: true, minProperties: 10, consistent: true },
			},
		],
		'object-curly-spacing': ['warn', 'always'],
		'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
		'one-var-declaration-per-line': 'warn',
		'operator-assignment': 'warn',
		'operator-linebreak': ['warn', 'before'],
		'padded-blocks': ['warn', 'never'],
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: 'block-like', next: '*' },
			{
				blankLine: 'always',
				prev: '*',
				next: ['const', 'let', 'do', 'switch', 'try', 'class', 'function', 'while', 'for', 'if', 'continue', 'break', 'throw', 'return'],
			},
			{ blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
		],
		'prefer-arrow-callback': 'warn',
		'prefer-exponentiation-operator': 'error',
		'prefer-numeric-literals': 'warn',
		'prefer-promise-reject-errors': 'warn',
		'prefer-template': 'warn',
		'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
		'rest-spread-spacing': 'warn',
		'semi-spacing': 'warn',
		'semi-style': 'warn',
		'semi': 'warn',
		'sort-imports': [
			'warn',
			{
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
			},
		],
		'space-before-blocks': 'warn',
		'space-before-function-paren': ['warn', { asyncArrow: 'always', anonymous: 'always', named: 'never' }],
		'space-in-parens': ['warn', 'never'],
		'space-infix-ops': 'warn',
		'space-unary-ops': 'warn',
		'spaced-comment': ['warn', 'always'],
		'switch-colon-spacing': 'warn',
		'template-curly-spacing': 'warn',
		'template-tag-spacing': 'warn',
		'valid-jsdoc': [
			'warn',
			{
				requireParamDescription: false,
				requireReturnDescription: false,
				requireReturn: false,
			},
		],
		'wrap-regex': 'warn',
		'yield-star-spacing': ['warn', 'after'],

		'newline-per-chained-call': 'off',
		'array-element-newline': ['off', { multiline: true, minItems: 1 }],
		'camelcase': ['off', { properties: 'never' }],
		'dot-notation': 'off',
		'max-len': 'off',
		'no-cond-assign': 'off',
		'no-confusing-arrow': 'off',
		'no-dupe-class-members': 'off',
		'no-empty': 'off',
		'no-shadow': ['off', { hoist: 'functions' }],
		'no-undef': 'off',
		'one-var': [
			'off',
			{
				var: 'never',
				let: 'never',
				const: 'never',
			},
		],
		'quote-props': 'off',
		'require-jsdoc': [
			'off',
			{
				require: {
					FunctionDeclaration: true,
					MethodDefinition: true,
					ClassDeclaration: true,
				},
			},
		],
	},
};
