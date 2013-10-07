module.exports = {
  fill: function (len, val) {
    var out = new Buffer(len);
    buffer.fill(val);
    return out;
  },

  // protocol crap with no good reason
  // these names can be changed after they have all been implemented
  // they are buffers not byte arrays
  int32ToByteArray: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L297
    return data;
  },
  int16ToByteArray: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L286
    return data;
  },
  int8ToByteArray: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L339
    return data;
  },
  int32ToByteArrayR: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L308
    return data;
  },
  int32ToByteHex: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L318
    return data;
  },
  int32ToByteHexR: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L329
    return data;
  },
  longToByteArray: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L350
    return data;
  },
  byteArrayToString: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L92
    return data;
  },
  byteArrayToLong: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L76
    return data;
  },
  byteArrayToInt: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L58
    // and
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L52
    return data;
  },
  byteArrayToHex: function(data) {
    // TODO
    // https://gist.github.com/Contra/6678097#file-commandencoder-java-L41
    return data;
  }
};