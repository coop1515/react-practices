const path = require('path');

module.exports = function(env) {
    return {
        mode: 'development',
        entry: path.resolve(`src/index.js`),
        output: {
            // path: path.resolve('public'),
            path: path.resolve('../backend/src/main/resources'),
            // filename: 'main.js',
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules: [{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }, 
                    'sass-loader']
            }, {
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        
        devServer: {
            host: '0.0.0.0',
            port: 9090,
            proxy: {
                '/api': 'http://localhost:8080'
            },
            
            liveReload: true,
            hot: true,
            compress: true
    }}
}

// const path = require('path'); 이전 안되는 코드

// module.exports = (env) => ({
//     mode: "none",
//     entry: path.resolve('./src/index.js'),
//     output: {
//         path: path.resolve('backend/public'),
//         filename: 'assets/js/main.js',
//         assetModuleFilename: 'images/[hash][ext]'
//     },
//     module: {
//         rules: [{
//             test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
//             type: 'asset/resource'
//         }, {
//             test: /\.(sa|sc|c)ss$/i,
//             use: [
//                 'style-loader',
//                 {loader: 'css-loader', options: {modules: true}},
//                 'sass-loader'
//             ]
//         }, {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//             options: {
//                 configFile: path.resolve('./config/babel.config.json')
//             }
//         }]
//     },
//     devtool: "eval-source-map",
//     devServer: {
//         contentBase: path.resolve('./public'),
//         watchContentBase: true,
//         host: "0.0.0.0",
//         port: 9999,
//         proxy: {
//             '/api': 'http://localhost:8888'
//         },
//         inline: true,
//         liveReload: true,
//         hot: false,
//         compress: true,
//         historyApiFallback: true
//     }
// }); 