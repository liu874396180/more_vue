import Vue from 'vue'
import Router from 'vue-router'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: '/system/',
  routes: [
    {
      path: '/my.html/',
      name: 'my',
      component: my
    }
  ]
})
