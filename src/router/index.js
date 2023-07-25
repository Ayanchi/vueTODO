import { createRouter, createWebHistory } from 'vue-router'
import ListHome from '../views/ListHome.vue'
import Form from '../views/Form.vue'

const routes = [
  {
    path: '/form',
    component: Form
  },
  {
    path: '/about',
    component: ListHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
