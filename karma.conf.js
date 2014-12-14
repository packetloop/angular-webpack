var webpackConfig = require('./webpack.config');
webpackConfig.cache = true;
webpackConfig.module.postLoaders = [{
  test: /\.js$/,
  exclude: /(_spec|vendor|node_modules)/,
  loader: 'istanbul-instrumenter'
}];


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*_spec.js'
    ],
    webpack: {
      resolve: webpackConfig.resolve,
      module: webpackConfig.module
    },
    exclude: [
      '*.sass',
      '*.html'
    ],
    preprocessors: {
      'src/**/*_spec.js': ['webpack']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'cobertura', subdir: '.', file: 'cobertura.xml'},
        {type: 'text', subdir: '.', file: 'text.txt'},
        {type: 'text-summary', subdir: '.', file: 'text-summary.txt'},
        {type: 'html', subdir: 'html'}
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};
