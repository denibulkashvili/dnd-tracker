const base = require('../.eslintrc.js')
const path = require('path')

module.exports = {
  ...base,
  parserOptions: {
    project: 'server/tsconfig.eslint.json',
  },
  rules: {
    ...base.rules,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/*.e2e-spec.ts',
          '**/test/**/*.ts',
          '**/__mocks__/*.ts',
        ],
        packageDir: [path.join(__dirname), path.join(__dirname, '..')],
      },
    ],
  },
}
