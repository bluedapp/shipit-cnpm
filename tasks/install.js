var path = require('path');
var utils = require('shipit-utils');

module.exports = function(shipit) {
  utils.registerTask(shipit, 'cnpm:install', task);
  function task() {
    shipit.config = shipit.config || {};
    shipit.config.cnpm = shipit.config.cnpm || {};
    shipit.config.cnpm.flags = shipit.config.cnpm.flags || '';
    if(!shipit.config.workspace){
      throw new Error('you need to config workspace');
    }

    return shipit.local('cnpm install ' + shipit.config.cnpm.flags, {
      cwd: shipit.config.workspace
    })
  }
}
