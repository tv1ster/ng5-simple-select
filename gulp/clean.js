let gulp = require('gulp');
let del = require('del');

module.exports = (config) => {
  gulp.task('clean:tmp', () => {
    return del(config.PATHS.tmp);
  });
  gulp.task('clean:dist', () => {
    return del(config.PATHS.dist);
  });
};
