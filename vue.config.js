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
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 100,
            }),
          ],
        },
      },
      // 启用 CSS modules for all css / pre-processor files.
      modules: false,
    },
  
    // 是一个函数，允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: (config) => {
      // 配置别名
      config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
        .set('views', resolve('src/views'))
  
      config.optimization.minimizer('terser').tap((args) => {
        // 去除生产环境console
        args[0].terserOptions.compress.drop_console = true
        return args
      })
    },
  
    // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: require('os').cpus().length > 1,
  
    devServer: {
      host: '0.0.0.0',
      port: 8088, // 端口号
      https: false, // https:{type:Boolean}
      open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌
  
      // 配置多个代理
      proxy: {
        '/api': {
          target: 'https://www.mock.com',
          ws: true, // 代理的WebSockets
          changeOrigin: true, // 允许websockets跨域
          pathRewrite: {
            '^/api': '',
          },
        },
      },
    },
  }
  