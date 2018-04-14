const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");
const webpack = require("webpack");

const defEnv = {
    production: false,
    port:"80"
};

module.exports = (env = defEnv) => {
    return {
        entry: {
            app: "./src/index.tsx",
            common: [
                'react', 'react-dom', 'material-ui',
                'redux', 'react-redux', 'material-ui-icons',
                'babel-polyfill', 'redux-form', 'styled-components'
            ]
        },
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist"),
            publicPath: path.build
        },
        node: {
            fs: "empty"
        },
        plugins:[
            env.production && new UglifyJsPlugin() || (() => {}),
            new webpack.EnvironmentPlugin({
                itIsDev: !env.production,
                port: env.port
            }),
            new HtmlWebpackPlugin({
                title: "Ваш список",
                minify:{
                    collapseWhitespace: false
                },
                template: './src/index.html',
                hash:true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                minChunks: 2
            })
        ],
        devServer: {
            contentBase: path.join(__dirname,"dist"),
            compress: true,
            stats: "errors-only",
            port: 9002,
            open: false
        },

        // Enable source maps for debugging webpack's output.
        devtool: !env.production ? "source-map" : false,

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
        },

        module: {
            loaders: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, use: "awesome-typescript-loader" },
                { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, use: "file-loader" }
                ],
    
        },
    }
};