'use strict'

let webpack = require('webpack');
let path = require('path');
let srcPath = path.join(__dirname, 'src');
let Clean = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  cache: true,
  entry: {
    index: path.join(srcPath, 'index.js')
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    pathInfo: true
  },
  module: {
    preLoaders: [
        // {
        //   test: /\.jsx?$/,
        //   exclude: /node_modules/,
        //   loader: 'eslint',
        // }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?cacheDirectory&optional[]=runtime']
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new Clean(['dist'])
  ],
  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './build',
    //page routing without hash marks
    historyApiFallback: true
  }
};
