const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    'index': './src/js/index.js',
    'home': './src/js/home.js',
    'our-whisky': './src/js/our-whisky.js',
    'our-story': './src/js/our-story.js',
    'news': './src/js/news.js',
    'news-content': './src/js/news-content.js',
    'order': './src/js/order.js',
    'privacy-policy': './src/js/privacy-policy.js',
    'terms-conditions': './src/js/terms-conditions.js',
    'modern-slavery-policy': './src/js/modern-slavery-policy.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '../',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/images/', to: 'src/images/' },
        { from: '*.html', to: '' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};