let gulp = require('gulp');
let exec = require('child_process').exec;
var path = require('path');

module.exports = (config) => {
  gulp.task('ngc', () => {
    var executable = path.join(__dirname.replace('gulp', ''), config.platformPath('/node_modules/.bin/ngc'));
    exec(`${executable} -p ./tsconfig-publish.json`, (e) => {
      if (e) console.log(e);
    }).stdout.on('data', (data) => {
      console.log(data);
    });
  });
};
