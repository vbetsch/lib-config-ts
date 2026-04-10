import tseslint from 'typescript-eslint';
import js from '@eslint/js';

/** We use tseslint.config() utility to provide type safety and autocompletion. */
export default tseslint.config(
  {
    /** Globally ignore build artifacts and dependency folders for all projects */
    ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**', './*.mjs'],
  },

  /** Provides the standard JavaScript recommended rules (e.g., preventing reassignment of constants).*/
  js.configs.recommended,
  /** Bridge between ESLint and TypeScript. It disables conflicting JS rules and enables core TS safety checks. */
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      /** Support latest ECMAScript features (e.g., Optional Chaining) */
      ecmaVersion: 'latest',
      /** Explicitly allow the use of 'import' and 'export' statements */
      sourceType: 'module',
    },
    rules: {
      /** Warn when 'any' type is used, encouraging better type safety without blocking dev */
      '@typescript-eslint/no-explicit-any': 'warn',
      /** Warn about variables that are declared but never used */
      '@typescript-eslint/no-unused-vars': 'warn',
      /** Disable standard JS rule as it does not understand TS types/interfaces */
      'no-unused-vars': 'off',
    },
  },
);
