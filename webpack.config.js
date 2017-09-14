
const path = require('path');
var config = {
  devtool: 'cheap-module-source-map',
  entry: './main.js',

  output: {

    path: path.resolve(__dirname, ''),
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}

module.exports = config;
