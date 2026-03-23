import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../../commercial/commercial-layout.vue'),
    },
    {
      path: '/auth',
      component: () => import('../../auth/auth-layout.vue'),
      children: [
        {
          path: '/auth',
          component: () => import('../../auth/login-view.vue'),
        },
      ],
    }
  ],
})

export default router
