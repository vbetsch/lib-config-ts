import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  /** Enable Prettier plugin and disable conflicting ESLint rules */
  eslintPluginPrettierRecommended,
  {
    rules: {
      /** Display formatting issues as warnings to keep the editor readable while typing */
      'prettier/prettier': 'warn',
    },
  },
];
