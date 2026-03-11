const globalCoverageThreshold = 100;

export default {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  coverageThreshold: {
    global: {
      branches: globalCoverageThreshold,
      functions: globalCoverageThreshold,
      lines: globalCoverageThreshold,
      statements: globalCoverageThreshold,
    },
  },
}
