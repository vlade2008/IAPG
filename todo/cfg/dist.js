/**
 * Created by albertoclarit on 4/18/16.
 */
var webpack = require('webpack');
var _ = require('lodash');
var path = require('path');
var publicPath = '/assets/';
var baseConfig = require('./base');

var config = _.merge({
    output: {
        path: path.join(__dirname, '/../dist/assets'),
        filename: 'app.js',
        publicPath: publicPath
    },
    entry: path.join(__dirname, '../src/components/run'),
    debug: false,
    cache: false,
    devtool: 'sourcemap',
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}, baseConfig);

config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loader: 'babel',
    exclude: /(node_modules|bower_components)/
});

module.exports = config;

