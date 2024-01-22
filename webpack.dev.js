const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: './src/entry/development.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});