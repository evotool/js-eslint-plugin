/* eslint-disable */

import * as unusedImportsPlugin from 'eslint-plugin-unused-imports';
import * as importPlugin from 'eslint-plugin-import';
import * as typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default {
  name: 'typescript',
  plugins: {
    '@typescript-eslint': typescriptPlugin,
    'import': importPlugin,
    'unused-imports': unusedImportsPlugin,
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: true, // Включение проверки на основе tsconfig.json
      tsconfigRootDir: process.cwd(),
    },
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  rules: {
    // 'unused-imports/no-unused-imports-ts': 'warn', // deprecated
    'unused-imports/no-unused-imports': 'warn',
    // 'unused-imports/no-unused-vars-ts': 'off', // deprecated
    'unused-imports/no-unused-vars': [
      'warn',
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
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-tslint-comment': 'warn',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': false }],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {},
        extendDefaults: false,
      },
    ],
    '@typescript-eslint/block-spacing': ['warn', 'always'],
    'block-spacing': 'off',
    '@typescript-eslint/brace-style': ['warn', '1tbs'],
    'brace-style': 'off',
    '@typescript-eslint/class-literal-property-style': 'warn',
    '@typescript-eslint/class-methods-use-this': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-spacing': 'warn',
    'comma-spacing': 'off',
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
    '@typescript-eslint/func-call-spacing': 'warn',
    'func-call-spacing': 'off',
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
        ignoredNodes: [
          'TSTypeParameterInstantiation',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
      },
    ],
    'indent': 'off',
    '@typescript-eslint/init-declarations': [
      'off',
      'never',
      {
        ignoreForLoopInit: true,
      },
    ],
    'init-declarations': 'off',
    '@typescript-eslint/key-spacing': 'warn',
    'key-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'warn',
    'keyword-spacing': 'off',
    '@typescript-eslint/lines-around-comment': [
      'warn',
      {
        allowBlockStart: true,
      },
    ],
    'lines-around-comment': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'lines-between-class-members': 'off',
    '@typescript-eslint/max-params': 'off',
    'max-params': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
      },
    ],
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
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    '@typescript-eslint/no-duplicate-type-constituents': 'warn',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
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
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    // '@typescript-eslint/no-implicit-any-catch': [
    //   'off',
    //   {
    //     allowExplicitAny: true,
    //   },
    // ], // deprecated, TS1196
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
    // '@typescript-eslint/no-parameter-properties': 'off', // deprecated
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
    '@typescript-eslint/no-throw-literal': 'error',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    // '@typescript-eslint/no-unnecessary-template-expression': 'warn', // deprecated в v8
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
    '@typescript-eslint/no-duplicate-jsx-props': 'error', // Новое в v8
    '@typescript-eslint/no-unsafe-function-type': 'off', // Новое в v8
    '@typescript-eslint/no-useless-constructor': 'off', // Incorrect working with emitDecoratorMetadata
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-empty-export': 'off', // In *.d.ts with declare global it needed
    '@typescript-eslint/no-useless-template-literals': 'warn',
    '@typescript-eslint/no-var-requires': 'off', // !
    // '@typescript-eslint/no-useless-template-literals': 'warn', // deprecated в v8
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/only-throw-error': 'warn',
    'object-curly-spacing': 'off',

    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'break',
          'class',
          'const',
          'continue',
          'do',
          'for',
          'function',
          'if',
          'interface',
          'let',
          'return',
          'switch',
          'throw',
          'try',
          'type',
          'while',
        ],
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'any',
        prev: ['type'],
        next: ['type'],
      },
    ],
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-destructuring-enums': 'off', // Новое в v8
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
    '@typescript-eslint/prefer-method-signature': 'off', // Новое в v8
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
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
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
    '@typescript-eslint/semi': ['error', 'always'],
    'semi': 'off',
    '@typescript-eslint/sort-type-constituents': 'off',
    // '@typescript-eslint/sort-type-union-intersection-members': 'off', // deprecated
    '@typescript-eslint/space-before-blocks': 'warn',
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'warn',
      {
        asyncArrow: 'always',
        anonymous: 'always',
        named: 'never',
      },
    ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-infix-ops': 'warn',
    'space-infix-ops': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'warn',
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
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-prototype-builtins': 'off',
    'no-return-await': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'valid-typeof': 'off', // ts(2367)

    // new rules
    '@typescript-eslint/no-deprecated': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-misused-spread': 'off',
    '@typescript-eslint/no-restricted-types': 'off',
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',
    '@typescript-eslint/no-unnecessary-template-expression': 'off',
    '@typescript-eslint/no-unnecessary-type-conversion': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/no-unsafe-type-assertion': 'off',
    '@typescript-eslint/no-unused-private-class-members': 'off',
    '@typescript-eslint/no-useless-default-assignment': 'off',
    '@typescript-eslint/no-wrapper-object-types': 'off',
    '@typescript-eslint/related-getter-setter-pairs': 'off',

    'import/enforce-node-protocol-usage': 'off',

    'no-duplicate-imports': 'off',
    'no-unassigned-vars': 'off',
    'no-useless-assignment': 'off',
    'preserve-caught-error': 'off',
  },
} satisfies import('eslint').Linter.Config;
