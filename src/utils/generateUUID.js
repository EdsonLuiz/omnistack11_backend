const crypto = require('crypto')


module.exports = function generateUUID() {
  return crypto.randomBytes(4).toString('HEX')
}
