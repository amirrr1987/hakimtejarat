import { createRouter, createWebHistory } from 'vue-router'
import TheUser from '@/views/TheUser.vue'
import TheUserHome from '@/pages/user/TheUserHome.vue'
import TheUserAbout from '@/pages/user/TheUserAbout.vue'
import TheUserProducts from '@/pages/user/TheUserProducts.vue'
import TheUserBlogs from '@/pages/user/TheUserBlogs.vue'
import TheUserContact from '@/pages/user/TheUserContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheUser',
      component: TheUser,
      children: [
        {
          path: '/',
          name: 'TheUserHome',
          component: TheUserHome,
        },
        {
          path: '/about-us',
          name: 'TheUserAbout',
          component: TheUserAbout,
        },
        {
          path: '/products',
          name: 'TheUserProducts',
          component: TheUserProducts,
        },
        {
          path: '/blogs',
          name: 'TheUserBlogs',
          component: TheUserBlogs,
        },
        {
          path: '/contact-us',
          name: 'TheUserContact',
          component: TheUserContact,
        },
      ]
    }
  ]
})

export default router
