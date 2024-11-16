import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'simple-import-sort/exports': 'error',
      'no-console': 'warn',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // `react` related packages come first, internal packages, side effect imports, parent imports, put '..' last, other relative imports, put same-folder imports and '.' last
            [
              '^react',
              '^@?\\w',
              '^(@api)(/.*|$)',
              '^(@assets)(/.*|$)',
              '^(@components)(/.*|$)',
              '^(@config)(/.*|$)',
              '^(@features)(/.*|$)',
              '^(@hooks)(/.*|$)',
              '^(@integrations)(/.*|$)',
              '^(@routes)(/.*|$)',
              '^(@store)(/.*|$)',
              '^(@layouts)(/.*|$)',
              '^(@modules)(/.*|$)',
              '^(@navigation)(/.*|$)',
              '^(@theme)(/.*|$)',
              '^(@translations)(/.*|$)',
              '^(@utils)(/.*|$)',
              '^\\u0000',
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
            ],
          ],
        },
      ],
    },
  },
);
