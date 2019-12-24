module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:import/warnings', 'plugin:import/typescript', '@react-native-community'],
  rules: {
    semi: ['error', 'never'],
    "comma-dangle": ["error", "only-multiline"],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }], },
}
