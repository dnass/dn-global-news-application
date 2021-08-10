const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
  	hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ]
})
