const { resolve } = require('path');

module.exports = {
  entry: './app/main.tsx',
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node-modules/,
        use: 'ts-loader',
      },
    ],
  },
};
