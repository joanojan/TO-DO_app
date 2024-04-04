import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/TasksView.vue'

import { useUserStore } from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/SignInView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/confirmEmail',
      name: 'confirmEmail',
      component: () => import('@/views/ConfirmEmail.vue')
    }


  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (userStore.user === undefined) {
    await userStore.fetchUser()
  }

  if (userStore.user === null && to.name !== 'signin' && to.name !== 'signup') {
    next({ name: 'signin' })
  } else {
    next()
  }
})

export default router
