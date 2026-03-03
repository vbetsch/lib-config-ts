import baseConfig from './base.mjs';
import globals from 'globals';

export default [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
      'no-process-exit': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'prefer-const': 'warn',
    },
  },
];
