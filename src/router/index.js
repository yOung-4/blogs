import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import MenuPage from '@/views/MenuPage.vue'
import PhotosPage from '@/views/PhotosPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: MainPage
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosPage
    }
  ]
})

export default router
