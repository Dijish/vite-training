const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    // Mode,
    // root: process.cwd(),
    root: path.resolve(__dirname, 'src'),
    base: '/apple/',
    // publicDir: 'public, false to disable; ./ -> vite root
    publicDir: path.resolve(__dirname, 'public'),
    build: {
        target: 'modules',
        // cssCodeSplit: false,
        assetsInlineLimit: 0,
        // outDir: 'dist', // ./ -> vite root
        outDir: path.resolve(__dirname, 'dist'),
        minify: 'esbuild',
        emptyOutDir: true, // Only clear if dist is in same root as src
        assetsDir: 'myAssets', // relative to outDir
        rollupOptions: {
            // input: {}, default: index: vite root / index.html
            input: {
                main: path.resolve(__dirname, './src/index.html')
            },
            // output: {},
            output: {
                // format: 'es',
                entryFileNames: '[name].[hash].[format].ini.js',
                chunkFileNames: '[name].[hash].[format].chunk.js',
                assetFileNames: '[name].[hash].asset.[ext]',
            }
        }
    }
})
