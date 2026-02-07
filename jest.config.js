/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // 👇 кажемо Jest, де реально лежить код
  roots: [
    '<rootDir>/services/boilerplate/src',
    '<rootDir>/services/boilerplate/tests',
  ],

  testMatch: ['**/?(*.)+(spec|test).ts'],

  moduleFileExtensions: ['ts', 'js', 'json'],

  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },

  // alias для common/*
  moduleNameMapper: {
    '^@commons/(.*)$': '<rootDir>/common/$1',
  },

  transformIgnorePatterns: ['node_modules/(?!@commons/)'],

  collectCoverage: true,
  collectCoverageFrom: [
    'services/boilerplate/src/**/*.ts',
    'common/**/*.ts',
    '!**/*.d.ts',
  ],

  clearMocks: true,
};
