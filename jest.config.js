// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: 10,
  clearMocks: true,
  displayName: 'rollcolumn-react',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'packages/**/**/**/*.{js,ts,tsx}',
    'packages/**/**/*.{js,ts,tsx}',
    'packages/**/*.{js,ts,tsx}',
    '!packages/**/setup*.{js,ts,tsx}',
    '!**/packages*.{js,ts,tsx}',
    '!**/*-env*.{js,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 50,
      lines: 80,
      statements: -10,
    },
  },

  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  coverageReporters: ['json', 'lcov', 'text'], // ["json", "text", "lcov", "clover"],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {},
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // modulePaths: ['<rootDir>/packages', '<rootDir>/node_modules'],
};
