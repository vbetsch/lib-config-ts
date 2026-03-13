import { createDefaultPreset } from 'ts-jest';

const globalCoverageThreshold = 80;
const tsJestTransformCfg = createDefaultPreset().transform;

export default {
  /** Automatically clear mock calls, instances, contexts and results before every test */
  clearMocks: true,

  /** Indicates which set of files to collect code coverage information from */
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/?(*.)+(spec|test).{ts,tsx}',
  ],

  /** Defines the minimum threshold enforcement for coverage results */
  coverageThreshold: {
    global: {
      branches: globalCoverageThreshold,
      functions: globalCoverageThreshold,
      lines: globalCoverageThreshold,
      statements: globalCoverageThreshold,
    },
  },

  /** A preset that is used as a base for Jest's configuration */
  preset: 'ts-jest',

  /** Automatically reset mock state before every test */
  resetMocks: true,

  /** A list of paths to directories that Jest should use to search for files */
  roots: ["<rootDir>/src", "<rootDir>/tests"],

  /** The test environment that will be used for testing */
  testEnvironment: 'node',

  /** The glob patterns Jest uses to detect test files */
  testMatch: ['**/?(*.)+(spec|test).{ts,tsx}'],

  /** A map from regular expressions to paths to transformers */
  transform: {
    ...tsJestTransformCfg,
  },
};
