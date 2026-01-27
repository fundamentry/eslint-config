import { type ESLint } from 'eslint';

export = {
  root: true,
  noInlineConfig: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['!.*.json', '**/package-lock.json'],
  overrides: [
    {
      files: ['*.json'],
      plugins: ['json-format'],
      settings: {
        'json/json-with-comments-files': [],
        'json/sort-package-json': [
          '$schema',
          'name',
          'version',
          'description',
          'repository',
          'homepage',
          'bugs',
          'author',
          'contributors',
          'license',
          'private',
          'engines',
          'publishConfig',
          'files',
          'main',
          'module',
          'types',
          'exports',
          'workspaces',
          'scripts',
          'dependencies',
          'peerDependencies',
          'devDependencies',
          'overrides',
        ],
      },
    },
  ],
} satisfies ESLint.ConfigData as ESLint.ConfigData;
