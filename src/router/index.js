import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import TasksView from '@/views/TasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TasksView
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
      path: '/password-reset',
      name: 'password-reset',
      component: () => import('@/views/PasswordResetView.vue')
    },
    {
      path: '/update-password',
      name: 'update-password',
      component: () => import('@/views/SetNewPasswordView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const beforeUserLoggedInRoutes = ['signin', 'signup', 'password-reset']
  const userStore = useUserStore()

  if (userStore.user === undefined) {
    await userStore.fetchUser()
  }
  if (!userStore.user?.user_metadata.isRecoveringPassword && to.name === 'update-password') {
    next({ name: 'home' })
  }
  if (userStore.user === null && !beforeUserLoggedInRoutes.includes(to.name)) {
    next({ name: 'signin' })
  }
  if (userStore.user && beforeUserLoggedInRoutes.includes(to.name)) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
