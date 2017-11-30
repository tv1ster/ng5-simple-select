var gulp = require('gulp');

module.exports = (config) => {
  gulp.task('watch', function () {
    return gulp.watch(config.PATHS.src, ['compile:on-change']);
  });
};
