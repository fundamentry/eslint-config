import { type ESLint } from 'eslint';

export = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['import'],
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          caseInsensitive: true,
          orderImportKind: 'desc',
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
    ],
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    'no-fallthrough': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'consistent-return': 'warn',
    'no-useless-constructor': 'off',
  },
} satisfies ESLint.ConfigData as ESLint.ConfigData;
