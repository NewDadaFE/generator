module.exports = {
  extends: ['standard', 'plugin:vue/essential'],
  parserOptions: {
    parser: 'babel-eslint',
    allowImportExportEverywhere: true,
  },
  rules: {
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
