const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.join(process.cwd(), './node_modules/library'),
        path.join(process.cwd(), './node_modules/librarb')
      ],
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  target: 'web',
};