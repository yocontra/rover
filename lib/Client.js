var util = require('util');
var async = require('async');
var request = require('request');
var EventEmitter = require('events').EventEmitter;

var noop = function(){};

var ua = 'WifiCar/1.1 CFNetwork/609.1.4 Darwin/13.0.0';

function Client(opt){
  EventEmitter.call(this);

  if (!opt) opt = {};

  this.host = opt.host || '192.168.1.100';
  this.port = opt.port || 80;
  this.username = opt.username || 'AC13';
  this.password = opt.password || 'AC13';
  this.base = "http://"+this.username+":"+this.password+"@"+this.host+":"+this.port;
  this.userAgent = opt.userAgent || ua;
}
util.inherits(Client, EventEmitter);

// movement commands
Client.moveCommands = {
  forward: [1,4],
  backward: [2,5],
  left: [1],
  right: [4],
  stop: [0,3]
};

Client.prototype.sendMoveCommand = function(cmd, cb) {
  if (!cb) cb = noop;

  var rOpt = {
    url: this.base + "/wifi_car_control.cgi",
    qs: {
      command: cmd,
      param: 10
    },
    headers: {
      'User-Agent': this.userAgent
    }
  };
  request(rOpt, function(err, res, body) {
    if (err) return cb(err);
    // it takes 3 seconds to do it
    setTimeout(cb, 2000);
  });
};

Object.keys(Client.moveCommands).forEach(function(movement){
  var commands = Client.moveCommands[movement];
  Client.prototype[movement] = function(cb) {
    if (!cb) cb = noop;
    async.forEach(commands, this.sendMoveCommand.bind(this), cb);
  };
});

// camera commands

Client.prototype.cameraUp = function(deg, cb) {
  if (!cb) cb = noop;

  var rOpt = {
    url: this.base + "/decoder_control.cgi",
    qs: {
      command: 0,
      degree: deg
    },
    headers: {
      'User-Agent': this.userAgent
    }
  };
  request(rOpt, function(err, res, body) {
    if (err) return cb(err);
    // it takes 2 seconds to do it
    setTimeout(cb, 2000);
  });
};

Client.prototype.cameraDown = function(deg, cb) {
  if (!cb) cb = noop;

  var rOpt = {
    url: this.base + "/decoder_control.cgi",
    qs: {
      command: 2,
      degree: deg
    },
    headers: {
      'User-Agent': this.userAgent
    }
  };
  request(rOpt, function(err, res, body) {
    if (err) return cb(err);
    // it takes 2 seconds to do it
    setTimeout(cb, 2000);
  });
};

module.exports = Client;