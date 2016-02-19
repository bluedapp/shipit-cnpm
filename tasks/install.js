var path = require('path');
var utils = require('shipit-utils');

module.exports = function(shipit) {
  utils.registerTask(shipit, 'cnpm:install', task);
  function task() {
    if(!shipit.config.workspace){
      throw new Error('you need to config workspace');
    }
    var npm = shipit.config.cnpm.npm;
    var flags = shipit.config.cnpm.flags;
    var cmd = npm + ' install ' + flags;
    var options = {
      cwd: shipit.config.workspace
    };
    if (shipit.config.cnpm.local == true){
      return shipit.local(cmd, options)
    } else {
      return shipit.remote(cmd, options)
    }
  }
}
