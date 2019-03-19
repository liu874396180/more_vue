import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import other from '@/components/other'
Vue.use(Router)

export default new Router({
  mode:'history',
  base: '/system/',
  routes: [
    {
      path: '/index.html/',
      name: 'index',
      component: index
      // ,children:[
      //   {
      //     path: '/other.html/',
      //     name: 'other',
      //     component: other
      //   }
      // ]
    }
    
  ]
})
