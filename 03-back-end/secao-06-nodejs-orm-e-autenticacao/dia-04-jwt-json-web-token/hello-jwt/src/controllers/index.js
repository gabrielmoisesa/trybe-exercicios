const ping = require('./ping');
const login = require('./login.controller');
const user = require('./user.controller');
const secret = require('./secret.controller');

module.exports = {
  ping,
  login,
  user,
  secret,
};
