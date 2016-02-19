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
    return shipit.local(npm + ' install ' + flags, {
      cwd: shipit.config.workspace
    })
  }
}
