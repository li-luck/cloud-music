import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    playState: false,
    playSongID: Number,
    playSongUrl: '',
    songDetail: {},
    songIds: ''
  },
  //不可异步
  mutations: {
    changePlay(state, playId) {
      state.playSongID = playId;
    },
    changePlayState(state, tf) {
      console.log(tf);
      state.playState = tf;
    },
    changePlayUrl(state, url) {
      state.playSongUrl = url;
    },
    changeSongDetail(state, item) {
      state.songDetail = item;
    },
    changeSongIds(state, ids) {
      state.songIds = ids;
    },
  },
  //类似mutation    可异步
  actions: {},
  //类似计算属性
  getters: {},
  modules: {}
})

export default store