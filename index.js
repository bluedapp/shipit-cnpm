/**
 * shipit cnpm
 */
var utils = require('shipit-utils');
module.exports = function (shipit) {
  shipit = utils.getShipit(shipit);
  shipit.on('fetched', function(){
    shipit.config = shipit.config || {};
    shipit.config.cnpm = shipit.config.cnpm || {};
    shipit.config.cnpm.flags = shipit.config.cnpm.flags || '';
    shipit.config.cnpm.npm = shipit.config.cnpm.npm || 'cnpm';
    shipit.config.cnpm.params = shipit.config.cnpm.params || '';
    require('./tasks/install')(shipit);
    if (shipit.config.cnpm.local == true) {
      shipit.start('cnpm:install');
    } else {
      shipit.on('published', function () {
        shipit.start('cnpm:install');
      });
    }
  })
};
