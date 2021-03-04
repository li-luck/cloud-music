import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const Home = () => import('../views/home');

//发现音乐   模块
const DiscoverMusic = () => import('../views/discoverMusic/discoverMusic')
const Video = () => import('../views/video/video.vue')
const MusicCloud = () => import('../views/musicCloud/musicCloud.vue')

const SongDetail = () => import('../views/song/songSheetDetail.vue')
const SongComment = () => import('../views/song/songComment.vue')
const SongList = () => import('../views/song/songListDetail.vue')

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
      path: '/song-detail/:id',
      component: SongDetail,
      children: [{
          path: '/song-list',
          name: 'song-list',
          component: SongList,
        },
        {
          path: '/song-comment',
          component: SongComment,
        },
      ]
    }
  ],
}]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router