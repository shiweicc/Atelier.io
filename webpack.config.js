var path = require('path');
const SRC_DIR = path.join(__dirname, 'src');
const CLI_DIR = path.join(__dirname, 'client');
module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: CLI_DIR,
    filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          }
      ]
  }
};