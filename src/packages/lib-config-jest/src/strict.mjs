const globalCoverageThreshold = 100;

export default {
  /** Defines the minimum threshold enforcement for coverage results */
  coverageThreshold: {
    global: {
      branches: globalCoverageThreshold,
      functions: globalCoverageThreshold,
      lines: globalCoverageThreshold,
      statements: globalCoverageThreshold,
    },
  },
  /** A map from regular expressions to paths to transformers */
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
}
