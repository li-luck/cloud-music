import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home');

//发现音乐   模块
const DiscoverMusic = () => import('../views/discoverMusic/discoverMusic')

const routes = [{
  path: '/',
  component: Home,
  redirect: '/discover-music',
  children: [{
    path: '/discover-music',
    component: DiscoverMusic,
  }],
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router