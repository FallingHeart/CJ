import Vue from 'vue'
import VueRouter from 'vue-router'

// sections
import Vending from 'C/Vending.vue'
import Content from 'C/Content.vue'

Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '/',
    component: Vending
  },
  {
    path: '*',
    component: Content
  }
]

const router = new VueRouter({
  // (缩写) 相当于 routes: routes
  routes: constantRouterMap,
  // 用history可以去除URL中的#，但直接访问该链接会404,已处理，仅在生产模式使用
  // https://router.vuejs.org/zh/guide/essentials/history-mode.html
  mode: process.env.NODE_ENV === 'production' ? 'history' : '',
  scrollBehavior (to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
