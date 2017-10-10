export default {
  input: 'dist/ng-validifier.js',
  name: 'ngValidifier',
  output: {
    file: 'dist/ng-validifier.umd.js',
    format: 'umd'
  },
  sourceMap: false,
  globals: {
    'lodash': '_',
    'jquery': '$',
    'ng-http-client-plus': 'ngHttpClientPlus',
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms'
  },
  external: [
    'lodash',
    'jquery',
    'ng-http-client-plus',
    '@angular/core',
    '@angular/forms'
  ]
};
