
'use strict';

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
  }
};