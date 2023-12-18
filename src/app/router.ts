import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory('/'),
  strict: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () =>
        import('@/views/home/Index.vue')
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: () =>
        import('@/views/recharge/Index.vue')
    },
    {
      path: '/unauthorized',
      name: 'Unauthorized',
      component: () => import('@/views/Unauthorized.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'Home' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
