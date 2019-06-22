const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 提取 CSS 到单个文件
// https://vue-loader-v14.vuejs.org/zh-cn/configurations/extract-css.html
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// Vue Loader从v14迁移至v15
// https://vue-loader.vuejs.org/migrating.html#notable-breaking-changes
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index/index.js'),
    css: 'element-ui/lib/theme-chalk/index.css',
    style: path.resolve(__dirname, '../src/index/assets/style/style.css')
  },
  plugins: [
    new CleanWebpackPlugin(['dist/index'], {
      root: path.resolve(__dirname, '../') // 根目录
      // 其他配置按需求添加
    }),
    new HtmlWebpackPlugin({
      title: '解忧便利店',
      template: path.resolve(__dirname, '../src/index/index.html'),
      favicon: path.resolve(__dirname, '../favicon.ico')
    }),
    new ExtractTextPlugin(path.resolve(__dirname, '../src/index/assets/style/style.css')),
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/index')
  },
  optimization: {
    // 防止重复
    splitChunks: {
      chunks: 'all'
    },
    // 提取模板
    runtimeChunk: 'single'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      index: path.resolve(__dirname, '../src/index/'),
      C: path.resolve(__dirname, '../src/index/components/'),
      V: path.resolve(__dirname, '../src/index/views/')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|ttc|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader'
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}
