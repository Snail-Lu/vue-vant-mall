export default {
	data() {
		return {}
	},
	computed: {},
	methods: {
		// 批量数据更新
		batchUpdate(data) {
			for (let key in data) {
				this[key] = data[key]
			}
		},
		// 路由跳转
		linkTo(path) {
			this.$router.push({ path })
		},
		// 页面回退
		back(delta = 1) {
			this.$router.back(delta)
		},
		// 页面提示
		tips(msg) {
			this.$toast(msg)
		}
	}
}
