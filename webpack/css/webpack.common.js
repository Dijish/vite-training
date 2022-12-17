const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './page.js',
    module: {
        rules: [
            {
                test: /\.html$/i,
                type: 'asset/resource',
                exclude: [path.resolve(__dirname, './src/tpl.html')],
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.txt$/i,
                type: 'asset/source' // raw-loader
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
    output: {
        asyncChunks: true, // Default true
        clean: true,
        filename: '[name].init.js',
        chunkFilename: '[id].chunk.js',
        assetModuleFilename: 'assets/[name].[hash][ext]',
        path: path.resolve(__dirname, 'dist')
    }
}
