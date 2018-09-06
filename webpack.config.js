const { join } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/main.jsx',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          ...(isProduction ? [MiniCssExtractPlugin.loader] : ['style-loader']),
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          {
            loader: 'purgecss-loader',
            options: {
              content: [
                join(__dirname, 'src/**/*.jsx')
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    ...(isProduction ? [new MiniCssExtractPlugin()] : []),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
