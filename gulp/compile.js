var gulp = require('gulp');
let runSequence = require('run-sequence');

module.exports = (config) => {
  gulp.task('compile', function () {
    runSequence('clean:tmp', 'copy:tmp', 'inline', 'clean:dist', 'ngc', 'copy:npm-metadata');
  });

  gulp.task('compile:dev', function () {
    runSequence('clean:tmp', 'copy:tmp', 'inline', 'clean:dist', 'ngc', 'run-demo', 'watch');
  });

  gulp.task('compile:on-change', function () {
    runSequence('clean:tmp', 'copy:tmp', 'inline', 'ngc');
  });
};
