var headers = {
  video: "MO_V",
  control: "MO_O"
};

function fill (len, val) {
  var out = new Buffer(len);
  buffer.fill(val);
  return out;
}

function createCommand (type, op, content) {
  var header = headers[type];
  if (!header) throw new Error("Invalid command type: " + type);

  var out = new Buffer();
  out.write(header);
  out.write(int16ToByteArray(op));
  out.write(fill(1, 0x00)); // new byte[1]
  out.write(fill(8, 0x00)); // new byte[8]
  out.write(int32ToByteArray(content.length));
  out.write(fill(4, 0x00)); // new byte[4]
  out.write(content);
  return out;
}

module.exports = createCommand;