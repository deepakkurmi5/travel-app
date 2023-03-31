import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import sourceData from '@/data.json'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/protected',
    name: 'protected',
    components: {
      default: () => import('@/views/ProtectedView.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/example/:id(\\d+)?',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    components: {
      default: () => import('@/views/InvoicesView.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination',
    component: () => import('@/views/DestinationView.vue'),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to) {
      const exits = sourceData.destinations.find((data) => {
        return data.id === parseInt(to.params.id)
      })

      if (!exits)
        return {
          name: 'NotFound',
          query: to.query,
          hash: to.hash,
          params: { pathMatch: to.path.split('/').slice(1) }
        }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience',
        component: () => import('@/views/ExperienceView.vue'),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' })
        }, 200)
      })
    )
  }
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router
