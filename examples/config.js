var rover = require('../');

var client = rover.createClient();

client.config(function(err, cfg){
  if (err) return console.log(err);
  console.log(cfg);
});

client.config('power', function(err, power){
  if (err) return console.log(err);
  console.log('power', power);
});

client.networks(function(err, networks){
  if (err) return console.log(err);
  console.log(networks);
});