import axios from 'axios'

const PRODUCT_URL = 'https://xxxx.com'
const MOCK_URL = 'http://xxxx.com'
const TIMEOUT = 30000

// 创建axios实例
let instance = axios.create({
	timeout: 30000,
	baseURL: process.env.NODE_ENV === 'production' ? PRODUCT_URL : MOCK_URL
})

// 请求拦截器
instance.interceptors.request.use(
	(config) => {
		// 设置token，Content-Type
		var token = sessionStorage.getItem('token')
		config.headers['token'] = token
		config.headers['Content-Type'] = config.contentType ? config.contentType : 'application/json;charset=UTF-8'
		// 请求loading效果
		// if (config.isLoading === true) {
		//   showLoading()
		// }
		return config
	},
	(error) => {
		// 关闭loading效果
		// hideLoading()
		return Promise.reject(error)
	}
)
// 响应拦截器
instance.interceptors.response.use(
	(res) => {
		// 登录判断，进行登录
		if (res.data && res.data.code === 401) {
			//  跳转登录或提示登录
		}
		return res.data
	},
	(error) => {
		// 错误提示
		// ...
		return Promise.reject(error)
	}
)

// 请求创建
export const request = async (method, url, data, config = { isFilter: true, isLoading: true }, timeout = TIMEOUT) => {
	let requestConfig = { ...config }
	if (method === 'get') {
		requestConfig.params = data
	} else {
		requestConfig.data = data || {}
	}
	if (timeout && timeout > 0) {
		requestConfig.timeout = timeout
	}
	let res = await instance({
		url,
		method,
		...requestConfig
	})

	if (config.isFilter) {
		return res.result
	} else {
		return res
	}
}

/***
 * 常用请求方法，支持过滤返回结果
 * @param url 接口地址
 * @param data 请求参数
 * @param config = { // 请求配置
 *   isFilter = true, 是否直接滤出结果，不返回code和msg
 *   isLoading = true，是否展示loading动画
 * 	 contentType 自定义contentType
 *  }
 * @returns {Promise<*|null|undefined>}
 */
const Get = (url, data = {}, config, timeout) => request('get', url, data, config, timeout)

const Post = (url, data = {}, config, timeout) => request('post', url, data, config, timeout)

const Delete = (url, data = {}, config, timeout) => request('delete', url, data, config, timeout)

const Put = (url, data = {}, config, timeout) => request('put', url, data, config, timeout)

/****
 * 导出
 * @param method
 * @param url
 * @param params
 * @param fileName
 * @returns {Promise<any|{message: string, status: string}>}
 */
const Export = async ({ method = 'post', url, data, fileName, timeout = TIMEOUT }) => {
	const instance = axios.create({})
	instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
	instance.defaults.responseType = 'arraybuffer'
	let requestConfig = {}
	if (method === 'get') {
		requestConfig.params = data
	} else {
		requestConfig.data = data || {}
	}
	if (timeout && timeout > 0) {
		requestConfig.timeout = timeout
	}
	let res = await instance({ method, url, ...requestConfig })

	// 新接口文档格式
	if (
		res.headers['content-type'].includes('application/x-msdownload') ||
		res.headers['content-type'].includes('application/vnd.ms-excel')
	) {
		let remoteName = ''
		const attr = res.headers['content-disposition']
		if (attr && attr.split('filename=')) {
			if (Array.isArray(attr.split('filename=')) && attr.split('filename=').length > 1) {
				remoteName = decodeURI(res.headers['content-disposition'].split('filename=')[1])
			}
		}

		const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
		const alink = document.createElement('a')
		if (fileName) {
			alink.download = fileName + '.csv'
		} else if (remoteName) {
			alink.download = remoteName
		} else {
			alink.download = Date.now() + '.csv'
		}
		alink.style.display = 'none'
		alink.href = URL.createObjectURL(blob) // 这里是将文件流转化为一个文件地址
		document.body.appendChild(alink)
		alink.click()
		URL.revokeObjectURL(alink.href) // 释放URL 对象
		document.body.removeChild(alink)
	} else {
		const enc = new TextDecoder('utf-8')
		// 转化成json对象
		return JSON.parse(enc.decode(new Uint8Array(res.data)))
	}
}

export { Get, Post, Delete, Put, Export }
