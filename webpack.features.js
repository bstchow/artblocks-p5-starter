const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './src/entry/calculateFeatures.ts',
    mode: 'production',
    optimization: {
        minimize: false,
        runtimeChunk: true,
    },
    output:{
        filename: '[name].js',
        path: __dirname + '/build',
        chunkFilename: '[id].[chunkhash].js'
    },
});