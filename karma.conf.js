var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/webpack.js'
    ],
    webpack: {
      resolve: webpackConfig.resolve,
      module: webpackConfig.module,
      devtool: 'eval',
      watch: false
    },
    exclude: [],
    preprocessors: {
      'test/webpack.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
