import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/results',
    name: 'results',
    component: function () {
      return import('@/components/Results.vue')
    }
  },
  // {
  //   path: '/thewinner',
  //   name: 'thewinner',
  //   component: function () {
  //     return import('@/components/whoIsTheWinner.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
