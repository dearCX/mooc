// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$http = axios;

Vue.use(VueLazyLoad,{
  loading:'/static/loading-svg/loading-bars.svg'
})

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
