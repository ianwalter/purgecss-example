const { join } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
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
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          'purgecss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
