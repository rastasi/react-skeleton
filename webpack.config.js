var webpack = require("webpack");

var BUILD_DIR = `${__dirname}/public/react`;
var APP_DIR = `${__dirname}/src`;

var config = {
  entry: APP_DIR + "/index.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|otf|eot|wof|woff|woff2|ttf)$/,
        loader: "url-loader"
      },

      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  }
};

module.exports = config;
