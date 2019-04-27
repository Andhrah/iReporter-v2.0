const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
          'sass-loader', //1. Turns sass into css
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};
