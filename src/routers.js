import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home.vue'
import PhotoViewer from '@/components/pages/PhotoViewer.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/photo-viewer', name: 'photo-viewer', component: PhotoViewer },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 }) // scroll top
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
