/**
 * Core Prettier configuration shared across all projects.
 * Enforces consistency in formatting while remaining flexible for React/TS.
 */
export default {
  /** Add a semicolon at the end of every statement */
  semi: true,
  /** Use single quotes instead of double quotes */
  singleQuote: true,
  /** Set the number of spaces per indentation-level */
  tabWidth: 2,
  /** Print trailing commas wherever possible in ES5 (objects, arrays, etc.) */
  trailingComma: 'es5',
  /** Omit parens when possible in arrow functions (e.g., x => x) */
  arrowParens: 'avoid',
  /** Line length where Prettier will try to wrap code */
  printWidth: 100,
  /** Use spaces instead of tabs for indentation */
  useTabs: false,
  /** End of line character to use (standard LF) */
  endOfLine: 'lf',
};
