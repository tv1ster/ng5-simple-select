var gulp = require('gulp');

module.exports = (config) => {
  gulp.task('copy:tmp', function () {
    return gulp.src(config.PATHS.src)
      .pipe(gulp.dest(config.PATHS.tmp));
  });
  gulp.task('copy:npm-metadata', function () {
    return gulp.src(config.PATHS.npm)
      .pipe(gulp.dest(config.PATHS.dist));
  });
};
