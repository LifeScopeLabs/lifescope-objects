const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/plugin.js'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'lifescope-objects.min.js',
    libraryTarget: 'umd',
    library: 'lifescope-objects'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: 'vue'
      },
      {
        test: /\.css$/,
        use: 'style!less!css'
      }
    ]
  }
};
