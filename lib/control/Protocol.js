var net = require('net');
var createCommand = require('./createCommand');

function Protocol(client){
  // this needs to be a duplex stream
  // we have to call a HTTP endpoint to auth
  // before creating the socket
  // also there needs to be a socket for control
  // and a socket for video
  this.socket = net.connect({
    host: client.host,
    port: client.port
  });
}

module.exports = Protocol;