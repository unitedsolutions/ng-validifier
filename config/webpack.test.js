/**
 * Adapted from angular2-webpack-starter
 */

const helpers = require('./helpers');
const webpack = require('webpack');
// adapted from angular2-webpack-starter

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      helpers.root('src'), 
      'node_modules'
    ]
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
      query: {
        allowJs: true,
        sourceMap: false,
        inlineSourceMap: true,
        module: "commonjs",
        removeComments: true
      },
      exclude: [/\.e2e\.ts$/]
    }]
  },

  plugins: [
    // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src')
    )
  ],

  performance: {hints: false}
};
