var util = require('util');
var async = require('async');
var request = require('request');
var EventEmitter = require('events').EventEmitter;
var runScript = require('./runScript');
var cleanNetworkList = require('./cleanNetworkList');

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

Client.prototype.config = function(key, cb) {
  if (typeof key === 'function') {
    cb = key;
    key = null;
  }
  if (!cb) cb = noop;

  var rOpt = {
    url: this.base + "/get_params.cgi",
    headers: {
      'User-Agent': this.userAgent
    }
  };
  request(rOpt, function(err, res, body) {
    if (err) return cb(err);
    var cfg = runScript(body);
    if (key) return cb(null, cfg[key]);
    cb(null, cfg);
  });
};

Client.prototype.scanNetworks = function(cb) {
  if (!cb) cb = noop;

  var scanOpt = {
    url: this.base + "/wifi_scan.cgi",
    headers: {
      'User-Agent': this.userAgent
    }
  };
  request(scanOpt, function(err, res, body) {
    if (err) return cb(err);
    // it takes 2 seconds to do it
    setTimeout(cb, 2000);
  });
};

Client.prototype.networks = function(cb) {
  if (!cb) cb = noop;

  this.scanNetworks(function(err){
    if (err) return cb(err);
    var rOpt = {
      url: this.base + "/get_wifi_scan_result.cgi",
      headers: {
        'User-Agent': this.userAgent
      }
    };
    request(rOpt, function(err, res, body) {
      if (err) return cb(err);
      var networks = runScript(body);
      networks = cleanNetworkList(networks);
      cb(null, networks);
    });
  }.bind(this));
};

// movement commands
Client.wheelCommands = {
  forward: [1,4],
  backward: [2,5],
  left: [1],
  right: [4],
  stop: [0,3]
};

Client.prototype.moveWheel = function(wheel, cb) {
  if (!cb) cb = noop;

  var rOpt = {
    url: this.base + "/wifi_car_control.cgi",
    qs: {
      command: wheel,
      param: 10
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

Object.keys(Client.wheelCommands).forEach(function(movement){
  var commands = Client.wheelCommands[movement];
  Client.prototype[movement] = function(cb) {
    if (!cb) cb = noop;
    async.forEach(commands, this.moveWheel.bind(this), cb);
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