export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/simpleSelect.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.simpleSelect',
  globals: {
    '@angular/common': 'ng.common',
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms'
  }
}
