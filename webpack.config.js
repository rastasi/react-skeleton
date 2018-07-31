var webpack = require('webpack');

var BUILD_DIR = `${__dirname}/public/react`;
var APP_DIR = `${__dirname}/src`;

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        use : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
