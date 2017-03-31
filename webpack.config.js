/**
 * Created by uzer on 30.03.2017.
 */
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    }
};
