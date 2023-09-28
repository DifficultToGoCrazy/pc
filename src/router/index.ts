import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    name: 'vite',
    path: '/vite',
    component: () => import('../pages/vite.vue')
  },
  {
    name: 'vue',
    path: '/vue',
    component: () => import('../pages/vue.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(),
  routes
})

export default router
