/** Strict rules for maximum type safety and architectural integrity */
export default {
  rules: {
    //overrides
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    /** Prevent unsafe 'as any' type casting */
    'no-restricted-syntax': ['error', {
      selector: 'TSAsExpression > TSAnyKeyword',
      message: 'Do not use `as any`, types must be explicit and safe.',
    }],
    /** Force explicit visibility (public/private) on class members */
    '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'explicit'}],
    /** Ensure interfaces start with an uppercase 'I' */
    '@typescript-eslint/naming-convention': [
      'error',
      {selector: 'interface', format: ['PascalCase'], custom: {regex: '^I[A-Z]', match: true}}
    ],
    /** Prevent using variables/functions before they are defined */
    '@typescript-eslint/no-use-before-define': ['error'],
    /** Enforce using 'import type' for type-only imports */
    '@typescript-eslint/consistent-type-imports': ['error', {prefer: 'type-imports'}],
    /** Ban the use of 'var' in favor of 'let' or 'const' */
    'no-var': 'error',
    /** Require all functions to have an explicit return type */
    '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: false}],

    //add
    'require-await': 'error',
    'no-undefined': 'warn',
    'prefer-const': ['error', {destructuring: 'all'}],
    'import/no-unresolved': 'error',
    'no-inline-comments': 'warn',
    'no-unused-private-class-members': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {ignoreEnums: true, ignore: [0, 1], enforceConst: true},
    ],
    '@typescript-eslint/no-empty-function': ['warn'],
    'default-case': 'warn',
    '@typescript-eslint/no-unnecessary-condition': ['error'],
    'semi': ['error', 'always'],

    //explain me
    // 'require-object-destructuring': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'error',
    // '@typescript-eslint/no-inferrable-types': 'off',
    // '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    // '@typescript-eslint/prefer-function-type': 'warn',
    // '@typescript-eslint/no-unsafe-member-access': 'warn',
    // '@typescript-eslint/no-extraneous-class': 'error',
    // '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
    // '@typescript-eslint/adjacent-overload-signatures': 'warn',
    // '@typescript-eslint/typedef': 'error',
    // 'arrow-parens': ['error', 'as-needed'],
    // 'max-len': ['warn', {code: 300, ignoreUrls: true}],

    // TODO: Create config for spellchecking, naming convention, jsx
  }
};
