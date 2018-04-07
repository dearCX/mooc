// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/*或者new Vue({
  // el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');*/
/*或者new Vue({
  // el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render:h=>h(App)
}).$mount('#app');*/