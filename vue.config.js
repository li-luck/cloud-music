const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    // open: true, // 自动打开浏览器
    // host: 'localhost',
    // port: 9930,
    // https: false,
    // hotOnly: false, // 热更新
    proxy: {
      '/api': {
        target: 'https://autumnfish.cn/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
  }
}