const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: {
    main: './src/js/index.js',
  },
  resolve: {
    alias: {
      '@': './src'
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    hot: true,
    port: 520,
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}