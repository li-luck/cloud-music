import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home');

//发现音乐   模块
const DiscoverMusic = () => import('../views/discoverMusic/discoverMusic')
// const Personality = () => import('../views/discoverMusic/personality') //个性推荐
// const SongSheet = () => import('../views/discoverMusic/songSheet') //歌单
// const RankingList = () => import('../views/discoverMusic/rankingList') //排行榜
// const Song = () => import('../views/discoverMusic/song') //歌手
// const NewMusic = () => import('../views/discoverMusic/newmusic') //最新音乐

const routes = [{
  path: '/',
  component: {
    default: Home,
    // a: DiscoverMusic
  },
  redirect: '/discover-music',
  children: [{
    path: '/discover-music',
    component: DiscoverMusic,
    // redirect: '/personality',
    // children: [
    //   // {
    //   //   path: '/personality',
    //   //   component: Personality,
    //   // },
    //   {
    //     path: '/songSheet',
    //     component: SongSheet,
    //   },
    //   {
    //     path: '/rankingList',
    //     component: RankingList,
    //   },
    //   {
    //     path: '/song',
    //     component: Song,
    //   },
    //   {
    //     path: '/newmusic',
    //     component: NewMusic,
    //   },
    // ]
  }],
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router