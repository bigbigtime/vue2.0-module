// vue.config.js
const path = require('path');

module.exports = {
  pages: {
      index: {
        // page 的入口
        entry: `src/project/${process.env.VUE_APP_PROJECT}/main.js`,
      },
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/subpage.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
      // bbb: 'src/project/bbb/main.js',
  },
  // 关闭代码检测
  lintOnSave: false,
  // 配置 scss
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/${process.env.VUE_APP_PROJECT}/index.scss";`
      }
    }
  },
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],  // 自动添加文件名后缀
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    } 
  }
}