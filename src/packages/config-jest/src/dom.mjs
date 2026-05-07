export default {
  /** A map from regular expressions to module names or to arrays of module names that allow to stub out resources */
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  /** A list of paths to modules that run some code to configure or set up the testing framework */
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  /** The test environment that will be used for testing */
  testEnvironment: 'jsdom',
};
