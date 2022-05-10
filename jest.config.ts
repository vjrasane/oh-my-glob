/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "node_modules",
    "coverage",
    "dist"
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  }
};