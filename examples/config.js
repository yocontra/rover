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

client.wifi(function(err, info){
  if (err) return console.log(err);
  console.log(info);
});

// most variables from .config() can be changed
client.set({
  username: 'AC13',
  userpwd: 'AC13',
  resolution: 8
}, function(err){
  if (err) return console.log(err);
  console.log('Changed config');
});