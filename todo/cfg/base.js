/**
 * Created by albertoclarit on 4/18/16.
 */
var path = require('path');
var port = 8000;
var publicPath = '/assets/';

module.exports = {
    devServer: {
        contentBase: './src/',
        historyApiFallback: true,
        hot: true,
        port: port,
        publicPath: publicPath,
        noInfo: false,
        proxy: {
            // proxy path - url that will be redirected to some server
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.styl/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf)$/,
                loader: 'url-loader?limit=8192'
            },
            {    test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loader: 'url?limit=10000'
            },

            {    test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
                 loader: 'file'
            }
        ]
    }
};
