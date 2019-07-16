import Vue from 'vue'

import store from '@/stores'
import router from '@/routers'
import App from '@/App'

import '@/assets/sass/common.scss'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
