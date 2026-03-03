import baseConfig from './base.mjs';
import globals from 'globals';

export default [
  ...baseConfig, // On importe toutes tes règles de base (naming, unused vars, etc.)
  {
    languageOptions: {
      globals: {
        ...globals.node, // On s'assure que 'process', '__dirname', etc. sont reconnus
      },
    },
    rules: {
      // Règles spécifiques au développement CLI
      'no-console': 'off', // Indispensable pour une CLI !
      'no-process-exit': 'off', // Souvent nécessaire dans les scripts de sortie
      '@typescript-eslint/no-var-requires': 'off', // Parfois utile pour importer du JSON ou des vieux modules
    },
  },
];
