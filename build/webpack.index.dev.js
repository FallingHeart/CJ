const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.index.base.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 8001,
    // 不通过webpack打包的通过以下为根目录进行访问 推荐使用绝对路径 设置为 ../ 会导致服务器不太安全
    contentBase: [path.join(__dirname, '../public'), path.join(__dirname, '../static')],
    // HMR
    hot: true
  },
  plugins: [
    // HMR
    new webpack.HotModuleReplacementPlugin()
  ]
})
