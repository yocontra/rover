var rover = require('../');

var client = rover.createClient();

client.reboot(function(err){
  if (err) return console.log(err);
  console.log('rebooted');
});