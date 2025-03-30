// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  // eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@stylistic/js/indent': ['error', 'tab'],
			eqeqeq: ['warn', 'smart'],
			quotes: ['error', 'single'],
			'no-debugger': 'warn',
			'react/no-unescaped-entities': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'no-empty': 'warn',
			'prefer-const': 'warn',
			'no-await-in-loop': 'off',
			'no-extend-native': 'off',
			'no-restricted-syntax': 'off',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'no-promise-executor-return': 'off',
			'brace-style': ['error', 'stroustrup'],
			'no-tabs': 'off',
			'comma-dangle': ['error', 'never'],
			'no-console': 'warn',
			'no-empty-function': ['error', { allow: ['constructors'] }],
			'no-continue': 'off',
			'no-param-reassign': 0,
			'no-plusplus': 0,
			'max-len': ['error', { code: 160, ignoreStrings: true, ignoreComments: true, ignoreTemplateLiterals: true }],
			'import-x/no-unresolved': 'off',
			semi: ['error', 'always'],
			'object-curly-spacing': ['error', 'always'],
			'@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
			'quote-props': ['error', 'as-needed', { keywords: true, unnecessary: true }],
			'key-spacing': ['error', { afterColon: true }],
			'space-infix-ops': ['error', { int32Hint: false }],
			'no-multiple-empty-lines': ['error', { max: 2 }],
			'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
			'padded-blocks': ['error', 'never'],
			'eol-last': ['error', 'always'],
			'object-shorthand': 'error',
			'prefer-arrow-callback': 'error',
			'no-trailing-spaces': 'error',
			'no-multi-spaces': 'error',
			'space-in-parens': 'error'
    },
  },
);