import Vue from 'vue'
import VueRouter from 'vue-router'
import {routesData} from './routes';


Vue.use(VueRouter)

  const routes = [
    ...routesData
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
