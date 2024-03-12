import { createRouter, createWebHistory } from 'vue-router'
import BarChart from '../views/BarChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/bar',
      name: 'Bar',
      component: BarChart
    },
    {
      path: '/pie',
      name: 'pie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/HelloWorld.vue')
    }
  ]
})

export default router
