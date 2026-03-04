export default {
  displayName: 'BASE',
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
};
