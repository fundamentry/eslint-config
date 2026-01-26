import { type ESLint } from 'eslint';

import base from '@fundamentry/eslint-config-typescript';

export = {
  ...base,
  extends: [...[base.extends ?? []].flat(), 'airbnb', 'airbnb/hooks'],
  plugins: [...(base.plugins ?? []), 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    ...base.rules,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-no-bind': 'off',
  },
} satisfies ESLint.ConfigData as ESLint.ConfigData;
