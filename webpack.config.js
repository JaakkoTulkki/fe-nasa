const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let autoprefixer = require('autoprefixer')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/},
      { test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer()]
          }
        },]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'public/index.html'})
  ],
  devServer: {
    historyApiFallback: true,
  },
}

