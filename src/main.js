import Vue from 'vue'
import App from './App.vue'
import { get, post } from './utils/http';

Vue.config.productionTip = false
Vue.prototype.$http = { get, post }

function initRem() {
  let cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
  window.document.documentElement.style.fontSize = `${100 * cale}px`
}

// 设置根字体大小
window.addEventListener('resize', function() {
  initRem()
})


new Vue({
  render: h => h(App),
}).$mount('#app')
