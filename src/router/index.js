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
    {
      path: '/about',
      name: 'about',
      component: () => import('../Pages/aboutPage.vue')
    },
    {
      path: '/thoughts',
      name: 'thoughts',
      component: () => import('../Pages/thoughtsPage.vue')
    },
  ]
})

export default router
