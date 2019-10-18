const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    devtool: 'cheep-module-source-map',
    devServer: {
        contentBase: './dist',
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        open: true,
        overlay: true,
        quiet: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
        }),
        new FaviconsWebpackPlugin('./src/images/logo.svg'),
        new ErrorOverlayPlugin(),
        new DashboardPlugin(),
        new SystemBellPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackNotifierPlugin(),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
    },
    optimization: {
        runtimeChunk: 'single',
    }
};