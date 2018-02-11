const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackCopy = require('copy-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.jsx',
        reactjs:[
            'react','react-dom',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].bundle.js'
    },
    plugins: [
        new UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'reactjs',
         }),
        new htmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
              test: /\.s?css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, use: "file-loader" }
          ]
    },
};