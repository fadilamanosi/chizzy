import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../Pages/homePage.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../Pages/projectPage.vue')
    },
  ]
})

export default router
