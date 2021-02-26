import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home');

//发现音乐   模块
const DiscoverMusic = () => import('../views/discoverMusic/discoverMusic')
const Video = () => import('../views/video/video.vue')
const MusicCloud = () => import('../views/musicCloud/musicCloud.vue')
const SongListDetail = () => import('../views/songListDetail.vue')

const routes = [{
  path: '/',
  component: Home,
  redirect: '/discover-music',
  children: [{
      path: '/discover-music',
      component: DiscoverMusic,
    },
    {
      path: '/video',
      component: Video,
    },
    {
      path: '/music-cloud',
      component: MusicCloud,
    },
    {
      path: '/song-detail',
      name: 'songDetail',
      component: SongListDetail,
    }
  ],
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router