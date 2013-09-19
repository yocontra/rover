var async = require('async');
var rover = require('../');

var client = rover.createClient();

var blink = function(cb){
  async.series([
    function(done){
      client.recordLight(true, done);
    },
    function(done) {
      setTimeout(done, 1500);
    },
    function(done){
      client.recordLight(false, done);
    },
    function(done) {
      setTimeout(done, 1500);
    }
  ], cb);
};

async.forever(blink, function(err){
  console.log(err);
});