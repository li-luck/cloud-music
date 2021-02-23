import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = [{}]

const router = new VueRouter({
  mode: 'history',
  routers
})

export default router