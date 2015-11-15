# shipit-cnpm
cnpm tasks for Shipit

support flags

## Usage

```javascript
var cnpm = require('shipit-cnpm');
var deploy = require('shipit-deploy');
module.exports = function(shipit) {
  deploy(shipit);
  cnpm(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/cnpm-test',
      deployTo: '/home/work/cnpm-test',
      repositoryUrl: 'https://xx.git',
      ignores: ['.git'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      cnpm: {
        flags: '--production'
      }
    },
    production: {
      servers: ['work@10.x.x.x']
    },
    dev: {
      servers: ['work@10.x.x.x']
    }
  });
}
```
