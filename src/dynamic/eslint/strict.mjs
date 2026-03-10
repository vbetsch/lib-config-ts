import importPlugin from 'eslint-plugin-import';

/** Strict rules for maximum type safety and architectural integrity */
export default {
  plugins: {
    /** Plugin to validate and organize import statements */
    'import': importPlugin,
  },
  rules: {
    /** Group overloaded function signatures together */
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    /** Style for literal class properties (enforces fields over getters) */
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
    /** Enforce using 'import type' for type-only imports */
    '@typescript-eslint/consistent-type-imports': ['warn', {prefer: 'type-imports'}],
    /** Require all functions to have an explicit return type */
    '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: false}],
    /** Force explicit visibility (public/private) on class members */
    '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit'}],
    /** Ensure exported functions have explicit types for boundaries */
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    /** Warn about empty functions to avoid dead code */
    '@typescript-eslint/no-empty-function': ['warn'],
    /** Warn about classes used only as namespaces */
    '@typescript-eslint/no-extraneous-class': 'warn',
    /** Prevent the use of 'any' type to maintain type safety */
    '@typescript-eslint/no-explicit-any': 'error',
    /** Disallow explicit types when they can be trivially inferred */
    '@typescript-eslint/no-inferrable-types': 'error',
    /** Warn about the use of magic numbers (non-named constants) */
    '@typescript-eslint/no-magic-numbers': ['warn', {ignoreEnums: true, ignore: [0, 1], enforceConst: true}],
    /** Prevent using variables or functions before they are defined */
    '@typescript-eslint/no-use-before-define': ['error'],
    /** Prevent unnecessary type assertions or conditions */
    '@typescript-eslint/no-unnecessary-condition': ['error'],
    /** Warn about unused variables to reduce dead code and clutter */
    '@typescript-eslint/no-unused-vars': 'warn',
    /** Use concise function type definitions over verbose interfaces */
    '@typescript-eslint/prefer-function-type': 'warn',
    /** Encourage marking class properties as readonly when possible */
    '@typescript-eslint/prefer-readonly': 'warn',
    /** Ensure type safety when using .reduce() with initial values */
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    /** Warn when explicit types are missing (use with caution) */
    '@typescript-eslint/typedef': 'warn',
    /** Ensure switch statements handle all possible cases */
    'default-case': 'warn',
    /** Ensure all imported modules can be resolved */
    'import/no-unresolved': 'error',
    /** Ban inline comments to keep the code layout clean */
    'no-inline-comments': 'warn',
    /** Prevent the use of 'undefined' as a value */
    'no-undefined': 'warn',
    /** Warn about unused private members in classes */
    'no-unused-private-class-members': 'warn',
    /** Ban the use of 'var' in favor of 'let' or 'const' */
    'no-var': 'error',
    /** Prevent unsafe 'as any' type casting via custom syntax selector */
    'no-restricted-syntax': ['warn', {
      selector: 'TSAsExpression > TSAnyKeyword',
      message: 'Do not use `as any`, types must be explicit and safe.',
    }],
    /** Enforce 'const' for variables that are never reassigned */
    'prefer-const': ['warn', {destructuring: 'all'}],
    /** Require 'await' for async functions to avoid logic errors */
    'require-await': 'error',
  }
};
