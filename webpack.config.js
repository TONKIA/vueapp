var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            //指定模板页面
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            //处理的顺序是从右至左
            //css处理
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理图片的url请求，limit是图片的大小，单位是byte
            { test: /\.(jpg|png|gif|jpeg|bmp)$/, use: ['url-loader?limit=10240'] },
            //字体
            { test: /\.(eot|woff|woff2|svg|ttf)$/, use: ['url-loader'] },
            //js，excule排除
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }
        ]
    }
}