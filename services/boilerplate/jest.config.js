/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // 👇 кажемо Jest, де реально лежить код
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests',
  ],

  testMatch: ['**/?(*.)+(spec|test).ts'],

  moduleFileExtensions: ['ts', 'js', 'json'],

  moduleNameMapper: {
    '^@commons/(.*)$': '<rootDir>/../../common/$1/index.ts',
    '^@src/(.*)$': '<rootDir>/src/$1',
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
};


