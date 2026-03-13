import baseConfig from './base.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** Configuration combining base rules and Prettier integration */
export default [
  /** Import all rules and settings from our base configuration */
  ...baseConfig,
  /** Enable Prettier plugin and disable conflicting ESLint rules */
  eslintPluginPrettierRecommended,
  {
    rules: {
      /** Display formatting issues as warnings to keep the editor readable while typing */
      'prettier/prettier': 'warn',
    },
  },
];
