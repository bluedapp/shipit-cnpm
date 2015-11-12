/**
 * shipit cnpm
 */
var utils = require('shipit-utils');
module.exports = function (shipit) {
  shipit = utils.getShipit(shipit);
  require('./tasks/install')(shipit);
  shipit.on('fetched', function () {
    shipit.start('cnpm:install');
  });
};
