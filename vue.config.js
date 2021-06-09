module.exports = {
    publicPath: './', // 默认为'/'
  
    // 将构建好的文件输出到哪里，本司要求
    outputDir: 'dist/static',
  
    // 放置生成的静态资源(js、css、img、fonts)的目录。
    assetsDir: 'static',
  
    // 指定生成的 index.html 的输出路径
    indexPath: 'index.html',
  
    // 是否使用包含运行时编译器的 Vue 构建版本。
    runtimeCompiler: false,
  
    transpileDependencies: [],
  
    // 如果你不需要生产环境的 source map
    productionSourceMap: false,
  
    // 配置css
    css: {
      // 是否使用css分离插件 ExtractTextPlugin
      extract: true,
      sourceMap: true,
      // css预设器配置项
      loaderOptions: {},
      // 启用 CSS modules for all css / pre-processor files.
      requireModuleExtension: true,
    },
}
  