// eslint-disable-next-line no-undef
module.exports = {
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/src/**/*.spec.(ts|js)'],
    testEnvironment: 'node',
    modulePaths: ['<rootDir>'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/*.spec.ts'],
  };
  