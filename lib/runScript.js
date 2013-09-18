var Contextify = require('contextify');

module.exports = function(script){
  var sandbox = Contextify();
  sandbox.run(script);
  sandbox.dispose();

  var ctx = {};

  Object.keys(sandbox).forEach(function(k){
    var val = sandbox[k];
    if (typeof val !== 'function') {
      ctx[k] = val;
    }
  });
  return ctx;
};