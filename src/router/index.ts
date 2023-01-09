import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/imageGallery',
    name: '',
    component: () => import('../views/ImageGallery.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router