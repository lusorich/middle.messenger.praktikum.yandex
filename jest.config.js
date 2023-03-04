/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.hbs$': '<rootDir>/node_modules/handlebars-jest',
    '\\.[t]s?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/src/mocks/fileMock.js',
    '\\.(css)$': '<rootDir>/src/mocks/fileMock.js',
  },
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.js'],
  transformIgnorePatterns: ['<root-dir>/node_modules/'],
};
