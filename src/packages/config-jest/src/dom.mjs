export default {
  /** The test environment that will be used for testing */
  testEnvironment: 'jsdom',
  /** A list of paths to modules that run some code to configure or set up the testing framework */
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
