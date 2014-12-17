'use strict';

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: './dest',
    publicPath: './dest/',
    chunkFilename: '[id].chunk.js'
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
      {test: /\.(png|jpg)$/, loader: 'url?limit=32768'},
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]'}
    ],
    noParse: [
      /node_modules\/angular/
    ]
  },
  devtool: 'eval'
};
