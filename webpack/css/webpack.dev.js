const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const html = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader']
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // file-loader
                generator: {
                    filename: 'IMG/[hash].[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new html({
            filename: 'index.html',
            title: 'Assets',
            minify: false, // true for production
            template: './tpl.html',
            favicon: './assets/favicon.ico',
        })
    ],
    watchOptions: {
        ignored: path.resolve(__dirname, 'node_modules')
    },
})