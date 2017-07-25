// adapted from angular2-webpack-starter

const helpers = require('./helpers');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  entry: helpers.root('src/ng-validify.ts'),

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'ng-validify.umd.js',
    library: 'ng-validify',
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
      loader: 'awesome-typescript-loader',
      exclude: [/\.spec\.ts$/]
    }]
  },

  plugins: [
    // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src')
    )
  ]
};
