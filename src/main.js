import Vue from 'vue'
import App from './App.vue'
import { Get, Post } from './utils/request'
import router from './router'
import vant from './components/Vant/index'
import '@/styles/index.scss' // global css

// 批量注册vant组件
Vue.use(vant)

Vue.config.productionTip = false
Vue.prototype.$http = { Get, Post }

export default new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
