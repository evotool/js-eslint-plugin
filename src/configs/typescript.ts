/* eslint-disable */

import * as unusedImportsPlugin from 'eslint-plugin-unused-imports';
import * as importPlugin from 'eslint-plugin-import';
import * as typescriptPlugin from '@typescript-eslint/eslint-plugin';
// @ts-ignore
import * as parser from '@typescript-eslint/parser';

export default {
  name: 'typescript',
  plugins: {
    // @ts-ignore
    '@typescript-eslint': typescriptPlugin,
    'import': importPlugin,
    'unused-imports': unusedImportsPlugin,
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser,
    parserOptions: {
      project: true, // Включение проверки на основе tsconfig.json
      tsconfigRootDir: process.cwd(),
    },
  },
  settings: {
    ...importPlugin.flatConfigs.typescript.settings,
  },
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'off',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],

    'import/no-unresolved': 'off', // !

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'off', // conflict in Promise.all([...])
    '@typescript-eslint/ban-tslint-comment': 'warn',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': false }],
    '@typescript-eslint/class-literal-property-style': 'warn',
    '@typescript-eslint/class-methods-use-this': 'off',
    '@typescript-eslint/consistent-generic-constructors': ['warn', 'constructor'],
    '@typescript-eslint/consistent-indexed-object-style': ['off', 'record'],
    '@typescript-eslint/consistent-return': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/default-param-last': 'off',
    'default-param-last': 'off',
    '@typescript-eslint/dot-notation': ['warn'],
    'dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'no-public',
        overrides: {
          accessors: 'no-public',
          constructors: 'no-public',
          methods: 'no-public',
          properties: 'no-public',
          parameterProperties: 'no-public',
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': [
      'off',
      'never',
      {
        ignoreForLoopInit: true,
      },
    ],
    'init-declarations': 'off',
    '@typescript-eslint/max-params': 'off',
    'max-params': 'off',
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'abstract-field',
          'abstract-method',
          'static-field',
          'instance-field',
          'constructor',
          'instance-method',
          'static-method',
        ],
      },
    ],
    '@typescript-eslint/method-signature-style': ['off', 'method'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-base-to-string': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-deprecated': 'warn',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-object-type': [
      'warn',
      {
        allowInterfaces: 'always',
        allowObjectTypes: 'always',
      },
    ],
    '@typescript-eslint/no-misused-spread': 'off',
    '@typescript-eslint/no-restricted-types': [
      'warn',
      {
        types: {},
      },
    ],
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
    '@typescript-eslint/no-unnecessary-template-expression': 'warn',
    '@typescript-eslint/no-unnecessary-type-conversion': 'error',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/no-unsafe-type-assertion': 'off',
    '@typescript-eslint/no-unused-private-class-members': 'warn',
    'no-unused-private-class-members': 'off',
    '@typescript-eslint/no-useless-default-assignment': 'error',
    '@typescript-eslint/no-wrapper-object-types': 'error',
    '@typescript-eslint/related-getter-setter-pairs': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreProperties: true,
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/no-invalid-this': 'warn',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off', // !
    '@typescript-eslint/no-loop-func': 'off',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: true,
      },
    ],
    '@typescript-eslint/no-mixed-enums': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        'paths': ['.', '..', '../..'],
        'patterns': [],
      },
    ],
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-this-alias': 'error', // !
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error', // !
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    '@typescript-eslint/no-unsafe-return': 'error', // !
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowShortCircuit: true,
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-useless-constructor': 'off', // Incorrect working with emitDecoratorMetadata
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-empty-export': 'off', // In *.d.ts with declare global it needed
    '@typescript-eslint/no-var-requires': 'off', // !
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/only-throw-error': 'warn',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: false, object: false },
      },
    ],
    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-promise-reject-errors': 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/require-await': 'warn',
    'require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': [
      'warn',
      {
        skipCompoundAssignments: true,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/sort-type-constituents': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/strict-void-return': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': [
      'warn',
      {
        considerDefaultExhaustiveForUnions: true,
      },
    ],
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': [
      'warn',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: true,
        variableDeclarationIgnoreFunction: true,
      },
    ],
    '@typescript-eslint/unbound-method': 'error', // !
    '@typescript-eslint/unified-signatures': 'off',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',

    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-keys': 'off',
    'no-duplicate-imports': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-obj-calls': 'off',
    'no-prototype-builtins': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-unassigned-vars': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-useless-assignment': 'off',
    'valid-typeof': 'off', // ts(2367)

    // removed
    // '@typescript-eslint/no-implicit-any-catch': [
    //   'off',
    //   {
    //     allowExplicitAny: true,
    //   },
    // ], // deprecated, TS1196
    // '@typescript-eslint/no-duplicate-jsx-props': 'error', // removed in v8
    // '@typescript-eslint/prefer-destructuring-enums': 'off', // removed in v8
    // '@typescript-eslint/prefer-method-signature': 'off', // removed in v8

    // renamed
    // '@typescript-eslint/ban-types': [
    //   'warn',
    //   {
    //     types: {},
    //     extendDefaults: false,
    //   },
    // ], // removed in v8
    // '@typescript-eslint/no-parameter-properties': 'off', // removed in v8
    // '@typescript-eslint/no-useless-template-literals': 'warn', // removed in v8
    // '@typescript-eslint/sort-type-union-intersection-members': 'off', // deprecated

    // replaced by @stylistic/eslint-plugin
    // '@typescript-eslint/block-spacing': ['warn', 'always'], // removed in v8
    // 'block-spacing': 'off',
    // '@typescript-eslint/brace-style': ['warn', '1tbs'], // removed in v8
    // 'brace-style': 'off',
    // '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'], // removed in v8
    // 'comma-dangle': 'off',
    // '@typescript-eslint/comma-spacing': 'warn', // removed in v8
    // 'comma-spacing': 'off',
    // '@typescript-eslint/func-call-spacing': 'warn', // removed in v8
    // 'func-call-spacing': 'off',
    // '@typescript-eslint/indent': [
    //   'warn',
    //   2,
    //   {
    //     SwitchCase: 1,
    //     FunctionDeclaration: { parameters: 'first' },
    //     FunctionExpression: { parameters: 'first' },
    //     ignoredNodes: [
    //       'TSTypeParameterInstantiation',
    //       'FunctionExpression > .params[decorators.length > 0]',
    //       'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
    //       'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
    //     ],
    //   },
    // ], // removed in v8
    // 'indent': 'off',
    // '@typescript-eslint/key-spacing': 'warn', // removed in v8
    // 'key-spacing': 'off',
    // '@typescript-eslint/keyword-spacing': 'warn', // removed in v8
    // 'keyword-spacing': 'off',
    // '@typescript-eslint/lines-around-comment': [
    //   'warn',
    //   {
    //     allowBlockStart: true,
    //   },
    // ], // removed in v8
    // 'lines-around-comment': 'off',
    // '@typescript-eslint/lines-between-class-members': [
    //   'warn',
    //   'always',
    //   {
    //     exceptAfterSingleLine: true,
    //   },
    // ], // removed in v8
    // 'lines-between-class-members': 'off',
    // '@typescript-eslint/member-delimiter-style': [
    //   'warn',
    //   {
    //     multiline: { delimiter: 'semi', requireLast: true },
    //     singleline: { delimiter: 'semi', requireLast: false },
    //   },
    // ], // removed in v8
    // '@typescript-eslint/no-extra-parens': [
    //   'warn',
    //   'all',
    //   {
    //     returnAssign: false,
    //     nestedBinaryExpressions: false,
    //     enforceForSequenceExpressions: false,
    //     ignoreJSX: 'multi-line',
    //   },
    // ], // removed in v8
    // 'no-extra-parens': 'off',
    // '@typescript-eslint/no-extra-semi': 'error', // removed in v8
    // 'no-extra-semi': 'off',
    // '@typescript-eslint/no-throw-literal': 'error', // removed in v8
    // 'no-throw-literal': 'off',
    // '@typescript-eslint/object-curly-spacing': ['warn', 'always'], // removed in v8
    // 'object-curly-spacing': 'off',
    // '@typescript-eslint/padding-line-between-statements': [
    //   'warn',
    //   {
    //     blankLine: 'always',
    //     prev: 'block-like',
    //     next: '*',
    //   },
    //   {
    //     blankLine: 'always',
    //     prev: '*',
    //     next: [
    //       'break',
    //       'class',
    //       'const',
    //       'continue',
    //       'do',
    //       'for',
    //       'function',
    //       'if',
    //       'interface',
    //       'let',
    //       'return',
    //       'switch',
    //       'throw',
    //       'try',
    //       'type',
    //       'while',
    //     ],
    //   },
    //   {
    //     blankLine: 'any',
    //     prev: ['const', 'let'],
    //     next: ['const', 'let'],
    //   },
    //   {
    //     blankLine: 'any',
    //     prev: ['type'],
    //     next: ['type'],
    //   },
    // ], // removed in v8
    // 'padding-line-between-statements': 'off',
    // '@typescript-eslint/semi': ['error', 'always'], // removed in v8
    // 'semi': 'off',
    // '@typescript-eslint/space-before-blocks': 'warn',
    // 'space-before-blocks': 'off',
    // '@typescript-eslint/space-before-function-paren': [
    //   'warn',
    //   {
    //     asyncArrow: 'always',
    //     anonymous: 'always',
    //     named: 'never',
    //   },
    // ],
    // 'space-before-function-paren': 'off',
    // '@typescript-eslint/space-infix-ops': 'warn',
    // 'space-infix-ops': 'off',
    // '@typescript-eslint/quotes': [
    //   'error',
    //   'single',
    //   {
    //     avoidEscape: true,
    //     allowTemplateLiterals: true,
    //   },
    // ], // removed in v8
    // '@typescript-eslint/type-annotation-spacing': 'warn', // removed in v8
  },
} satisfies import('eslint').Linter.Config;
