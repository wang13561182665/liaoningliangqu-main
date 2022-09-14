import { createRouter, createWebHashHistory } from 'vue-router'
import twoareaLargescreen from '../views/twoareaLargescreen/index.vue'

const routes = [
  {
    path: '/',
    name: 'twoareaLargescreen',
    component: twoareaLargescreen
  },
  {
    path: '/roleManagement',
    name: 'roleManagement',
    component: () => import('../views/roleManagement/index.vue')
  },
  {
    path: '/userManagement',
    name: 'userManagement',
    component: () => import('../views/userManagement/index.vue')
  },
  {
    path: '/logManagement',
    name: 'logManagement',
    component: () => import('../views/logManagement/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
