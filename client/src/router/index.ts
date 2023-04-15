import { createRouter, createWebHistory } from 'vue-router'
import AdminView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
import UserPage from '@/pages/user/ThePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: UserView,
      children: [
        {
          path: '/',
          name: 'page',
          component: UserPage,
        }
      ]
    },
    {
      path: '/admin',
      name: 'AdminView',
      component: AdminView

    }
  ]
})

export default router
