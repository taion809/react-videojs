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
  /*output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    pathInfo: true
  },*/
  output: {
    library: 'ReactVideoJs',
    libraryTarget: 'umd'
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
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
        loaders: ['babel-loader?cacheDirectory&optional[]=runtime']
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
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
