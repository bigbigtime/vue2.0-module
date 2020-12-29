// vue.config.js
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
        prependData: `@import "~@/styles/main.scss";`
      }
    }
  }
}