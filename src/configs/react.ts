/* eslint-disable */
import * as reactPlugin from 'eslint-plugin-react';
import * as reactHooksPlugin from 'eslint-plugin-react-hooks';

export default {
  name: 'react',
  plugins: {
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin as any,
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // react
    // 'react/boolean-prop-naming': 'off', // deprecated
    'react/button-has-type': 'off',
    // 'react/checked-requires-onchange-or-readonly': 'off', // Новое правило, нужно устанавливать явно
    // 'react/default-props-match-prop-types': 'off', // deprecated
    'react/destructuring-assignment': 'off',
    'react/display-name': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    // 'react/forbid-foreign-prop-types': 'off', // deprecated
    // 'react/forbid-prop-types': 'off', // deprecated
    'react/function-component-definition': 'off',
    // 'react/hook-use-state': 'off', // Новое правило, нужно устанавливать явно
    'react/iframe-missing-sandbox': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-props-no-spreading': 'off',
    // 'react/jsx-sort-default-props': 'off', // deprecated
    'react/jsx-sort-props': 'off',
    // 'react/jsx-space-before-closing': 'off', // deprecated
    'react/jsx-tag-spacing': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'off',
    // 'react/no-arrow-function-lifecycle': 'off', // deprecated
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-danger': 'off',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'off',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-namespace': 'off',
    // 'react/no-object-type-as-default-prop': 'off', // deprecated
    'react/no-redundant-should-component-update': 'off',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'off',
    'react/no-typos': 'off',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'warn',
    // 'react/no-unsafe': 'off', // deprecated
    'react/no-unstable-nested-components': 'off',
    // 'react/no-unused-class-component-methods': 'off', // Новое правило, нужно устанавливать явно
    // 'react/no-unused-prop-types': 'off', // deprecated
    // 'react/no-unused-state': 'off', // deprecated
    'react/no-will-update-set-state': 'off',
    'react/prefer-es6-class': 'off',
    'react/prefer-exact-props': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // 'react/require-default-props': 'off', // deprecated
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'off',
    'react/sort-comp': 'off',
    'react/sort-default-props': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'off',
    'react/void-dom-elements-no-children': 'off',

    // eslint
    'no-empty-pattern': 'off',
  },
} satisfies import('eslint').Linter.Config;
