const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './src/entry/production.ts',
    mode: 'production',
    optimization: {
        minimize: false,
    }
});