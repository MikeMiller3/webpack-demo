let config = require('./config.json')
module.exports = function() {
  let greet = document.createElement('div');
    greet.textContent = config.greeting;
      return greet;
};
