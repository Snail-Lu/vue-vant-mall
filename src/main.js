import Vue from 'vue'
import App from './App.vue'
import { get, post } from './utils/http'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = { get, post }

export default new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
