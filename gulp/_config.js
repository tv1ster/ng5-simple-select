var os = require('os');

let PATHS = {
  src: 'src/**/*',
  tmp: 'tmp',
  dist: 'dist',
  npm: 'npm/**/*'
};

function platformPath(path) {
  return /^win/.test(os.platform()) ? `${path}.cmd` : path;
}

module.exports = {
  PATHS: PATHS,
  platformPath: platformPath,
  port: 4545
};


