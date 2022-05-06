import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../view/table.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:id',
    component: Table
  },
  {
    path: '*',
    redirect: '/1'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
