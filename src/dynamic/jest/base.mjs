const {createDefaultPreset} = require('ts-jest');
const globalCoverageThreshold = 80;

const tsJestTransformCfg = createDefaultPreset().transform;

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src", "<rootDir>/*tests*"],
  moduleFileExtensions: ['ts', 'tsx'],
  testMatch: ['**/?(*.)+(spec|test).{ts,tsx}'],
  transform: {
    ...tsJestTransformCfg,
  },
  clearMocks: true,
  resetMocks: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/?(*.)+(spec|test).{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: globalCoverageThreshold,
      functions: globalCoverageThreshold,
      lines: globalCoverageThreshold,
      statements: globalCoverageThreshold,
    },
  },
};
