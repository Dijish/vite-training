const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const css = require('mini-css-extract-plugin')
const html = require('html-webpack-plugin')
const cssMinimizer = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    optimization: {
        chunkIds: 'named',
        minimizer: [
            '...',
            new cssMinimizer()
        ]
    },
    output: {
        publicPath: '/orange/'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader']
                use: [css.loader, 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: [css.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // file-loader
                generator: {
                    filename: 'IMG/[hash].[name][ext]',
                    publicPath: '/apple/',
                    outputPath: 'apple/'
                }
            },
        ]
    },
    plugins: [
        new css({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        }),
        new html({
            filename: 'index.html',
            title: 'Assets',
            minify: false, // true for production
            template: './tpl.html',
            favicon: './assets/favicon.ico',
            publicPath: '/html'
        })
    ]
})