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
