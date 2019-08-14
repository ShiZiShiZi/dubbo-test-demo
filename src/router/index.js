import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去除路由中的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/DubboDemo')
    }
  ]
})
