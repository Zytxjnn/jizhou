
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, './'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve('src'),
            '@/assets': path.resolve(__dirname, 'src/assets'),
            '@/pages': path.resolve(__dirname, 'src/pages'),
            '@/comp': path.resolve(__dirname, 'src/components'),
            '@/network': path.resolve(__dirname, 'src/network'),
            '@/router': path.resolve(__dirname, 'src/router'),
            '@/common': path.resolve(__dirname, 'src/common'),
            '@/store': path.resolve(__dirname, 'src/store')
        }
    }
}