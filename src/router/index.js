import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/components/DestinationShow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
