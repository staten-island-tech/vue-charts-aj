import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PieView from '../views/PieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pie',
      name: 'pie',
      component: PieView
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/BarView.vue')
    }
  ]
})

export default router
