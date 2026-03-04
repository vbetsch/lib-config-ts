/** Strict business rules for high-quality TypeScript code */
export default {
  rules: {
    /** Force explicit return types on functions to improve readability and safety */
    '@typescript-eslint/explicit-function-return-type': 'error',
    /** Disallow the use of console.log in production code */
    'no-console': 'error',
    /** Prevent empty interfaces which serve no purpose */
    '@typescript-eslint/no-empty-interface': 'error',
    /** Ensure consistent use of type imports for better performance and clarity */
    '@typescript-eslint/consistent-type-imports': 'error',
    /** Limit the number of lines in a function to keep it maintainable */
    'max-lines-per-function': ['warn', { max: 50, skipBlankLines: true, skipComments: true }],
  },
};
