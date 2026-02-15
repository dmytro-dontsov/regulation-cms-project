/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  roots: ['<rootDir>/src', '<rootDir>/tests'],

  testMatch: ['**/?(*.)+(spec|test).ts'],

  moduleFileExtensions: ['ts', 'js', 'json'],

  moduleNameMapper: {
    '^@commons/failure$': '<rootDir>/../../common/failure/index.ts',
    '^@commons/mongo$': '<rootDir>/../../common/mongo/index.ts',
    '^@commons/validation$': '<rootDir>/../../common/validation/index.ts',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@regulations/(.*)$': '<rootDir>/src/regulations/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
  },

  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },

  transformIgnorePatterns: ['node_modules/(?!@commons/)'],

  clearMocks: true,

  globalSetup: '<rootDir>/jest.setup.js',
}


