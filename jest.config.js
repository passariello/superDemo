/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {

  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',

  modulePathIgnorePatterns: ["./dist"],

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    },
    "arsenal": {}
  },

  displayName: "Arsenal 3D",
  globals: {
    PROJECT_NAME: "Arsenal 3D"
  },
  bail: 20,
  verbose: true,

  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|js)x?$": ["ts-jest",{}],
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  globals: {
    arsenal: {}
  }

};
