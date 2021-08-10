const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
  	app: './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /(node_modules|bower_components|lib)/,
  			use: {
  				loader: 'babel-loader'
  			}
  		},
  		{
  			test: /\.(png|svg|jpg|gif)$/,
  			use: {
  				loader: 'file-loader'
  			}
  		},
      {
        test: /(\.scss|\.css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            url: false
          }
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  plugins: [
  	new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Global News Code Exercise',
      template: 'index.html',
      chunks: ['app'],
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/images', to: './src/images' }
      ]
    }),
  ]
}
