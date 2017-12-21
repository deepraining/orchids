
'use strict';

var webpack = require('webpack');
var moment = require('moment');
var packageJson = require('./package.json');

module.exports = {
  entry:{
    orchids:'./src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'orchids.js',
    library: 'orchids',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader:  'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`
    orchids v${packageJson.version}

    https://github.com/senntyou/orchids

    @senntyou <jiangjinbelief@163.com>

    ${moment().format('YYYY-MM-DD HH:mm:ss')}
    `)
  ]
};