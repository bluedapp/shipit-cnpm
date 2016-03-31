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
    var params = shipit.config.cnpm.params;
    var install = util.format('%s i %s', npm, flags);
    if (shipit.config.cnpm.remote == true){
      if(params){
        params = util.format('%s &&', params);
      }
      var current = path.join(shipit.config.deployTo, 'current');
      return shipit.remote(util.format('%s cd %s && %s', params, current, install));
    } else {
      return shipit.local(install, {
        cwd: shipit.config.workspace
      })
    }
  }
}
