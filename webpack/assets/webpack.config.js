const path = require('path')
const html = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    // entry: './entry.js',
    entry: './page.js',
    module: {
        rules: [
            {
                test: /\.txt$/i,
                type: 'asset/source' // raw-loader
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
            {
                test: /\.svg$/i,
                type: 'asset/inline', // url-loader
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 10 //bytes
                //     }
                // }
            }
        ]
    },
    plugins: [
        new html({
            filename: 'index.html',
            title: 'Assets',
            minify: false, // true for production
            template: './tpl.html',
            favicon: './assets/favicon.ico'
        })
    ],
    output: {
        asyncChunks: true, // Default true
        clean: true,
        filename: '[name].init.js',
        chunkFilename: '[id].chunk.js',
        assetModuleFilename: 'assets/[name].[hash][ext]',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        ignored: path.resolve(__dirname, 'node_modules')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        }
    }
}
