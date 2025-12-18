const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: 'development',
  entry:  './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-blog.bundle.js',
    clean: true,
  },
  devServer:{
    static: './dist',
    port: 3000,
    open: true,
    hot:true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts','.tsx'],
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: ['style-loader',
              'css-loader',
              'postcss-loader'], 
      },

      {
        test: /\.m?js|jsx$/,
        exclude:  /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: 
    [new HtmlWebpackPlugin({ 
      template: './src/index.html',
      filename: 'index.html'
    })],
};