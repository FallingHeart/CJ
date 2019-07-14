// 1. prod 下 import 样式表无法形成 <style>...</style>, dev 下可以。
import './assets/style/style.css'

import Vue from 'vue'

import ElementUI from 'element-ui'

// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// import VueFullPage from 'vue-fullpage.js'

import App from './App.vue'
import router from './router'

// Vue.use(VueFullPage)

Vue.use(ElementUI)

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

export default new Vue({
  el: '#index-app',
  render: h => h(App),
  router
})
