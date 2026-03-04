export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  modulePresets: ["ts-jest"],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
};
