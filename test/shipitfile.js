var cnpm = require('../');
var deploy = require('shipit-deploy');
module.exports = function(shipit) {
  deploy(shipit);
  cnpm(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/node-example',
      deployTo: '/home/work/node-example',
      repositoryUrl: 'https://github.com/demohi/node-example.git',
      ignores: ['.git'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      cnpm: {
        flags: '--production'
      }
    },
    development: {
      servers: ['work@10.6.12.167']
    }
  });
}
