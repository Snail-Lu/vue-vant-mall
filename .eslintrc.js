module.exports = {
	env: {
		browser: true,
		es6: true,
		commonjs: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:vue/essential'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		process: true
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': 'error'
	}
}
