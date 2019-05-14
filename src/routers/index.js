import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/routers/pages/Home.vue'
import List from '@/routers/pages/List.vue'
import Detail from '@/routers/pages/Detail.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/list', name: 'list', component: List },
    { path: '/list/:id', name: 'detail', component: Detail },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 }) // scroll top
})

router.beforeEach((to, from, next) => {
  console.table({
    call: 'router.beforeEach',
    to,
    from
  })
  next()
})

export default router
