var rover = require('../');
var async = require('async');

var client = rover.createClient();

async.series([
  client.cameraUp.bind(client, 30),
  client.cameraDown.bind(client, 30),
  client.right.bind(client),
  client.forward.bind(client),
  client.backward.bind(client),
  client.left.bind(client)
], function(err){
  if (err) console.log(err);
  console.log('done!');
});