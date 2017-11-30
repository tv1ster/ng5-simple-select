let gulp = require('gulp');
let shell = require('gulp-shell');

module.exports = (config) => {
  gulp.task(
    'run-demo',
    shell.task([`webpack-dev-server --port ${config.port} --config webpack.demo.js --inline --progress`]));
};
