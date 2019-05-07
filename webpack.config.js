const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html'
});

const dotenvPlugin = new Dotenv();
const envLoaderPlugin = new webpack.DefinePlugin({
  'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL),
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s?css|sass)$/,
        use: [
          'style-loader', // 3. Inject styles into the DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [htmlPlugin, dotenvPlugin, envLoaderPlugin],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    port: 8080
  }
};
