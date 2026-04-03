/** Naming conventions for consistency across TypeScript and React files */
export default {
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      /** Interfaces must start with an uppercase 'I' (e.g., IUser) */
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: { regex: '^I[A-Z]', match: true },
      },
      /** Type aliases and Enums must use PascalCase */
      {
        selector: ['typeAlias', 'enum', 'class'],
        format: ['PascalCase'],
      },
      /** Private class members must start with an underscore */
      {
        selector: 'classProperty',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      /** Variables and functions use camelCase */
      {
        selector: ['variable', 'function'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
    ],
  },
};
