/*
Copyright 2015 by Grovo
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
