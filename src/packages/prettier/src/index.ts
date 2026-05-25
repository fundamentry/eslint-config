import { type ESLint } from 'eslint';

export = {
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'es5',
      },
    ],
  },
} satisfies ESLint.ConfigData as ESLint.ConfigData;
