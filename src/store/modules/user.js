import { login, logout } from '*'
import { removeAll, setToken } from '@base/utils/auth'
import { local } from '@base/utils/storage'
import router from '@base/router'

const user = {
	state: getInitialState(),
	mutations: {
		SET_INFO: (state, info) => {
			state.info = info
			setToken(info.id)
		},
		RESET_USER(state) {
			state = getInitialState()
			removeAll()
			local.clear()
			router.push(`/login?redirect=${router.currentRoute.fullPath}`)
		}
	},

	actions: {
		// 登录
		Login({ commit }, userInfo) {
			return new Promise((resolve, reject) => {
				login(userInfo)
					.then((info = {}) => {
						commit('SET_INFO', info)
						resolve(info)
					})
					.catch((error) => {
						reject(error)
					})
			})
		},

		// 获取用户信息
		GetUserInfo({ commit, state }) {
			return new Promise((resolve, reject) => {
				getUserInfo().then((info = {}) => {
					commit('SET_INFO', info)
					resolve(info)
				})
			})
		},

		// 登出
		LogOut({ commit, state }) {
			return new Promise((resolve, reject) => {
				logout()
					.then(() => {
						commit('RESET_USER')
						resolve()
					})
					.catch((error) => {
						reject(error)
					})
			})
		}
	}
}

// 获取初始state
function getInitialState() {
	return {
		info: null
	}
}

export default user
