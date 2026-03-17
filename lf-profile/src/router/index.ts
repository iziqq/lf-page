import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../commercial/commercial-layout.vue'),
      children: [
        {
          path: '',
          name: 'commercial',
          component: () => import('../commercial/commercial-view.vue')
        }
      ]
    }
  ],
})

export default router
