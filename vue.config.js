/*
 * @Author: East
 * @Date: 2021-11-25 10:23:26
 * @LastEditTime: 2021-12-01 16:55:51
 * @LastEditors: Please set LastEditors
 * @Description: 修改 Vue CLI 配置
 * @FilePath: \vue3-ts-cms-02\vue.config.js
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  outputDir: './build', // 打包的输出文件夹
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components',
  //       views: '@/views'
  //     }
  //   },
  //   plugins: [
  //     Components({
  //       resolvers: [ElementPlusResolver()]
  //     })
  //   ]
  // }
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },

  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components',
      views: '@/views',
      assets: '@/assets',
      utils: '@/utils'
    }
  }
  // 链式方法
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
