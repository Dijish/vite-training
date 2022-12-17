const path = require('path')
const { pathToFileURL } = require('url')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        // sideEffects: false,
        // providedExports: true,
        usedExports: true,
        // minimize: true,
        // minimizer: ['...', new Plugin()] // JS, CSS, HTML
    },
    // devtool: 'inline-source-map',
    // entry: './src/entry.js',
    // entry: './entry.js',
    // entry: ['./entry.js', './entryTwo.js'],
    entry: {
        pageOne: {
            import: './entry.js',
            dependOn: 'shared'
        },
        pageTwo: {
            import: './entryTwo.js',
            dependOn: 'shared'
        },
        shared: './shared.js'
    },
    output: {
        iife: true,
        clean: true,
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    // watch: true,
    watchOptions: {
        // ignored: /node_modules/,
        // ignored: [path.resolve(__dirname, 'node_modules')]
        ignored: ['**/node_modules']
    },
    devServer: {
        port: 8080,
        hot: true,
        watchFiles: ['**/src/backend/*'],
        static: [
            {
                directory: path.resolve(__dirname, 'public'),
                watch: true,
                publicPath: '/'
            },
            {
                directory: path.resolve(__dirname, 'style'),
                watch: false,
                publicPath: '/style/',
                serveIndex: false,
                staticOptions: {
                    index: 'about.html'
                }
            }
        ]
    }
}