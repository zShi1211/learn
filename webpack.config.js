const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/js/index'
    },
    output: {
        filename: 'script/[name].js',
        publicPath: '/music/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(png)|(jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/html/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            { from: './public/source', to: './source' },
            { from: './public/mock', to: './mock' }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash:5].css'
        })
    ],
    devServer: {
        open: true,
        hot: true,
        openPage: 'music/index.html'
    },
    stats: {
        colors: true,
        modules: false
    }
}