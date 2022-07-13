const path = require('path');

const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
<<<<<<< HEAD
        use: ['style-loader', 'css-loader'],
      },
=======
        use: [
          'style-loader',
          'css-loader'
        ]
      }
>>>>>>> 81c9d9e (added functionality of switching between styles, changed css)
    ],
  },
};

