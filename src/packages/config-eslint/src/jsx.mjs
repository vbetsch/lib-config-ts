import reactPlugin from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

/** Configuration for React and JSX/TSX projects, focusing on accessibility and best practices */
export default {
  files: ['**/*.jsx', '**/*.tsx'],
  plugins: {
    /** Accessibility rules for JSX elements */
    'jsx-a11y': jsxA11y,
    /** React specific linting rules */
    'react': reactPlugin,
  },
  rules: {
    /** Ensure high standards for accessibility in JSX */
    ...jsxA11y.configs.recommended.rules,
    /** Standard React best practices */
    ...reactPlugin.configs.recommended.rules,
    /** Functions use camelCase, but allow PascalCase for React Components */
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['function'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
    /** Enforce PascalCase for component names */
    'react/jsx-pascal-case': 'error',
    /** Prevent the use of 'any' in prop types for better safety */
    'react/prop-types': 'off',
    /** Disable requirement for React in scope (modern JSX transform) */
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    /** Automatically detect the version of React to use */
    react: {
      version: 'detect',
    },
  },
};
