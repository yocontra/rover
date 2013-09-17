var Client = require('./lib/Client');

module.exports = {
  createClient: function(opt) {
    return new Client(opt);
  }
};