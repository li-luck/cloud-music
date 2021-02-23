import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home.vue');

const routers = [{
    path: '',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  routers
})

export default router