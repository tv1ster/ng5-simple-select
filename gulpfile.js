var config = require('./gulp/_config');
var requireDir = require('require-dir');
var gulpFiles = requireDir('./gulp');

for (var index in gulpFiles) {
  if (index.indexOf('_config') < 0) {
    gulpFiles[index](config);
  }
}
