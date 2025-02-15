const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  // 自定义网页标题
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '月下的博客'
      return args
    })
  }
})
