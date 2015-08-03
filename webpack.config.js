var path = require('path');

module.exports = {
  entry: {
    app: [
      './vendor/angular.src.js',
      './node_modules/angular-route/angular-route.js',
      './src/app.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: './dest',
    publicPath: '.',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include: path.resolve('src')},
      {test: /\.css$/, loader: 'style!css?sourceMap'},
      {test: /\.sass$/, loader: 'style!css?sourceMap!sass?sourceMap&indentedSyntax=true'},
      {test: /\.(png|jpg)$/, loader: 'url?limit=32768'},
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]'},
      {test: /\.haml$/, loader: 'hamlc-loader'}
    ],
    noParse: [
      /angular\.src\.js/
    ]
  },
  devtool: 'eval',
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true
    },
    contentBase: '.',
    publicPath: '.'
  }
};
