// adapted from angular2-webpack-starter

let testWebpackConfig = require('./webpack.test');

module.exports = function(config) {
  let configuration = {
    basePath: '',
    
    frameworks: ['jasmine'],
    
    exclude: [],
    
    files: [{pattern: './config/spec-bundle.js', watched: false}],
    
    preprocessors: {'./config/spec-bundle.js': ['webpack', 'sourcemap']},
    
    webpack: testWebpackConfig,

    webpackMiddleware: {stats: 'errors-only'},

    reporters: ['mocha'],

    mochaReporter: {
      ignoreSkipped: true
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: [
      'PhantomJS'
    ],

    singleRun: true
  };

  config.set(configuration);
};
