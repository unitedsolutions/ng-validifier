var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    
    frameworks: ['jasmine'],
    
    files: [{pattern: './karma-test-shim.js', watched: false}],
    
    preprocessors: {'./karma-test-shim.js': ['webpack', 'sourcemap']},
    
    client: {
      clearContext: false
    },
    
    webpack: webpackConfig,
    
    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'kjhtml'],
    
    port: 9876,
    
    colors: true,
    
    logLevel: config.LOG_INFO,
    
    autoWatch: true,
    
    browsers: ['Chrome'],
    
    singleRun: false
  });
};
