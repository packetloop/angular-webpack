var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: './dest',
    publicPath: '/dest/'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      'vendor': __dirname + '/src/vendor/'
    }
  },
  module: {
    loaders: [
      {test: /\.sass$/, loader: 'style!css!sass?indentedSyntax=true'},
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]'}
    ],
    noParse: [
      /node_modules\/angular/
    ]
  },
  devtool: 'eval'
};
