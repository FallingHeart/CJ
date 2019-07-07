const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.index.base.js')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:7].js'
  },
  // 生产环境 source-map 耗费很多性能，暂时不用
  devtool: 'source-map',
  // 生产环境会摇树 tree shaking ,只需在 package.json 中 sideEffects 设为 false
  // 天坑 设为 false 会使 vue 中样式 style 被摇落,故需要将 sideEffects 设为 ["*.vue"]
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // 模块标识符
    new webpack.HashedModuleIdsPlugin(),
    // 打包分析
    new BundleAnalyzerPlugin(
      {
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8081
      }
    )
  ]
})
