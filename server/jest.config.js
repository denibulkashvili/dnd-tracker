module.exports = {
  globalSetup: '../globalSetup.js',
  globalTeardown: '../globalTeardown.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  rootDir: 'src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: '../../coverage/server',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
    },
  },
  setupFilesAfterEnv: ['../jest.setup.js'],
  coverageReporters: ['html', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 95,
    },
  },
}
