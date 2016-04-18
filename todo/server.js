/**
 * Created by albertoclarit on 4/18/16.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require('open');


new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.devServer.port, 'localhost', function(err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + config.devServer.port);
        console.log('Opening your system browser...');
        open('http://localhost:' + config.devServer.port + '/');
    });
