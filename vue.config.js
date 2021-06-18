const path = require('path') //引入path模块
function resolve(dir) {
	return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

// 判断是否是生产环境
const isProd = process.env.NODE_ENV === 'production'

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
		extract: isProd,
		sourceMap: true,
		// css预设器配置项
		loaderOptions: {},
		// 启用 CSS modules for all css / pre-processor files.
		requireModuleExtension: true
	},
	chainWebpack: (config) => {
		//路径别名设置，set第一个参数：设置的别名，第二个参数：设置的路径
		config.resolve.alias
			.set('@', resolve('./src')) //根据目录的层级来决定，也可以自行设
			.set('@components', resolve('./src/components'))
			.set('@views', resolve('./src/views'))
			.set('@assets', resolve('./src/assets'))
			.set('@utils', resolve('./src/utils'))
	},
	pluginOptions: {
		// 使用第三方插件进行全局样式文件引入
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [
				path.resolve(__dirname, './src/styles/index.scss'),
				path.resolve(__dirname, './src/styles/variables.scss'),
				path.resolve(__dirname, './src/styles/mixin.scss')
			]
		}
	}
}
