import Vue from 'vue'
import App from './App.vue'
import { Get, Post } from './utils/request'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = { Get, Post }

export default new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app')
