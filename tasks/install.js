var path = require('path');
var utils = require('shipit-utils');
var util = require('util');

module.exports = function(shipit) {
  utils.registerTask(shipit, 'cnpm:install', task);
  function task() {
    if(!shipit.config.workspace){
      throw new Error('you need to config workspace');
    }
    var npm = shipit.config.cnpm.npm;
    var flags = shipit.config.cnpm.flags;
    var install = util.format('%s i %s', npm, flags);
    if (shipit.config.cnpm.local == true){
      return shipit.local(install)
    } else {
      var current = path.join(shipit.config.deployTo, 'current');
      return shipit.remote(util.format('cd %s && %s', current, install));
    }
  }
}
