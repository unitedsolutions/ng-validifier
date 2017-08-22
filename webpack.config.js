let webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  entry: './src/ng-validifier.ts',

  output: {
    path: './dist',
    publicPath: '/',
    filename: 'ng-validifier.umd.js',
    library: 'ng-validifier',
    libraryTarget: 'umd'
  },

  externals: {
    'lodash': {
      root: '_', 
      commonjs: 'lodash', 
      commonjs2: 'lodash', 
      amd: 'lodash'
    },
    'jquery': {
      root: '$', 
      commonjs: 'jquery', 
      commonjs2: 'jquery', 
      amd: 'jquery'
    },
    'ng-http-plus': {
      root: 'ngHttpPlus',
      commonjs: 'ng-http-plus',
      commonjs2: 'ng-http-plus',
      amd: 'ng-http-plus'
    },
    '@angular/core': {
      root: ['ng', 'core'], 
      commonjs: '@angular/core', 
      commonjs2: '@angular/core', 
      amd: '@angular/core'
    },
    '@angular/forms': {
      root: ['ng', 'forms'],
      commonjs: '@angular/forms',
      commonjs2: '@angular/forms',
      amd: '@angular/forms'
    }
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }]
  },

  plugins: [
    // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
    new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, './src')
  ]
};
