const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'app.bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
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
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|mp4)$/, use: "file-loader" }
          ]
    },
    devServer: {
        port: 8085,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        open: true
    }
};