import Vue from 'vue'
import App from './App.vue'
import { get, post } from './utils/http';

Vue.config.productionTip = false
Vue.prototype.$http = { get, post }



export default new Vue({
  render: h => h(App),
}).$mount('#app')
