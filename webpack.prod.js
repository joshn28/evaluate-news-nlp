const path = require("path");
const webpack = require("webpack");
const htmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/client/index.js',
    mode: "production",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.sass$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
        ],
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}