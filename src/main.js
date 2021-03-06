import Vue from 'vue'
import App from './App.vue'
import { get, post } from './utils/http';
import router from './router';

Vue.config.productionTip = false
Vue.prototype.$http = { get, post }

function setRem(baseWidth = 750) {
  const dpr = window.devicePixelRatio;
  const currentWidth = document.documentElement.clientWidth;
  let remSize = 0;
  let scale = 0;
  scale = currentWidth / baseWidth;
  remSize = baseWidth / 10;
  remSize = remSize * scale;
  document.documentElement.style.fontSize = remSize + 'px';
  document.documentElement.setAttribute('data-dpr', `${dpr}`);
}

setRem();

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
