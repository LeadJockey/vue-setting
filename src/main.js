import Vue from 'vue'
import axios from 'axios'

import store from '@/stores'
import router from '@/routers'
import App from '@/components/App'

import '@/assets/sass/common.scss'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
