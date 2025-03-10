const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        collapseWhitespace: false,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/images',
        to: path.resolve(__dirname, 'dist/assets/images'),
      },
    ]),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./assets/icons/[name].[ext]',
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./assets/fonts/[name].[ext]',
          },
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
