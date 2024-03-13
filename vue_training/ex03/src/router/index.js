import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/add',
    name: 'add',
  
    component: () => import('../views/AddView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
