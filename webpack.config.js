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
    noParse: [
      /node_modules/
    ]
  },
  devtool: 'eval'
};
