require('tsconfig-paths/register')

module.exports = {
  ...require('./src/database/config').default,
}
