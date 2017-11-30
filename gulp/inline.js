var gulp = require('gulp');
var inlineResources = require('../misc/inline-resources');

module.exports = (config) => {
  gulp.task('inline', function () {
    return Promise.resolve()
      .then(() => inlineResources(config.PATHS.tmp));
  });
};
