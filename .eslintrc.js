// @ts-check
const prettierConfig = require('./.prettierrc.js')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    __DEV__: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      tsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'arrow-parens': ['error', 'as-needed'],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-const': ['error', { destructuring: 'all' }],
    'space-before-function-paren': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
  },
  ignorePatterns: ['.husky', '.vscode', 'dist', 'node_modules', 'public', 'typings'],
}
