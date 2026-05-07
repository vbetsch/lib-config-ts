export default {
  /** Allow styles files imports in jsx */
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  /** Required for jsx testing */
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  /** The test environment that will be used for testing */
  testEnvironment: 'jsdom',
};
