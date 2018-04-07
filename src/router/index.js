import Vue from 'vue'
import Router from 'vue-router'
import goodList from '@/views/goodList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodList',
      component: goodList
    }
  ]
})
