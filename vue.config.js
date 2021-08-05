module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: 'iLzxの博客-因为热爱',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // publicPath: "https://cdn.jsdelivr.net/gh/ilzx/kite-resource", // 这个地方就是你的cdn的地址
}
