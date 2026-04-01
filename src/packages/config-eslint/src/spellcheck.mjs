import spellcheck from 'eslint-plugin-spellcheck';

/** Spelling configuration to enforce English language across the codebase */
export default {
  plugins: {
    /** Plugin to check spelling in identifiers, comments, and strings */
    'spellcheck': spellcheck,
  },
  rules: {
    /** Ensure all code text is valid English */
    'spellcheck/spell-checker': [
      'warn',
      {
        /** Check spelling in comments */
        comments: true,
        /** Check spelling in variable names and identifiers */
        identifiers: true,
        /** Dictionary used for verification */
        lang: 'en_US',
        /** Minimal character length for a word to be checked */
        minLength: 3,
        /** Custom words to ignore (technical terms, names, libraries) */
        skipWords: [
          'vbetsch',
        ],
        /** Check spelling in string literals */
        strings: true,
        /** Check spelling in template literals */
        templates: true,
      },
    ],
  },
};
