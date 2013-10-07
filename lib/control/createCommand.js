var constants = require('./constants');
var util = require('../util');

function createCommand (type, op, content) {
  var header = constants.headers[type];
  if (!header) throw new Error("Invalid command type: " + type);

  var out = new Buffer();
  out.write(header);
  out.write(util.int16ToByteArray(op));
  out.write(util.fill(1, 0x00)); // new byte[1]
  out.write(util.fill(8, 0x00)); // new byte[8]
  out.write(util.int32ToByteArray(content.length));
  out.write(util.fill(4, 0x00)); // new byte[4]
  out.write(content);
  return out;
}

module.exports = createCommand;