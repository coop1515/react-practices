const path = require('path');

module.exports = {
    mode:'development',
    entry:path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'main.js'
    },
    module:{
        rules:[{
            test: /\.(sa|sc|c)ss$/i, // \.css$면 .css로 끝나는 모든 것. i = ignore
            use:['style-loader','css-loader', 'sass-loader']
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        hot: false,
        compress: true
    }
}