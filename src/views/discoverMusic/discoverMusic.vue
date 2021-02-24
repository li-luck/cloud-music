<template>
  <div class="box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="personality">
        <div class="home-swiper" slot="personality">
          <personal-swiper :list="swiperList"></personal-swiper>
        </div>
        <div class="recommend" slot="personality">
          <recommend :list="recommendList"></recommend>
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="songSheet">
        <slot name="songSheet"></slot>
        歌单
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="rankingList">
        <slot name="rankingList"></slot>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="song">
        <slot name="song"></slot>
      </el-tab-pane>
      <el-tab-pane label="最新音乐" name="newmusic">
        <slot name="newmusic"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PersonalSwiper from "../../components/swiper/swiper";
import Recommend from "../../components/recommend/recommend";

import axios from "axios";
export default {
  name: "discover-music",
  components: {
    PersonalSwiper,
    Recommend,
  },
  data() {
    return {
      activeName: "personality",
      swiperList: [],
      recommendList: [],
      lista: [],
      listb: [],
    };
  },
  created() {
    this.getPersonalSwiper();
    this.getRecommend();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    /**个性推荐  轮播 */
    getPersonalSwiper() {
      axios.get("banner").then((res) => {
        this.swiperList = res.data.banners;
        console.log("个性推荐", this.swiperList);
      });
    },
    /**推荐歌单 */
    getRecommend() {
      axios.get("top/playlist?offset=711&limit=12").then((res) => {
        console.log(res);
        this.recommendList = res.data.playlists;
        this.lista = this.recommendList.filter((item, index) => {
          return index < 6;
        });
        this.listb = this.recommendList.filter((item, index) => {
          return index > 5;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__nav {
  float: none;
  .el-tabs__active-bar {
    display: none;
  }
}
.box {
  width: 100%;
  height: 100%;
}
.home-swiper {
  width: 100%;
  height: 350px;
  float: left;
  margin-bottom: 40px;
  margin-top: 40px;
}

.recommend {
  width: 100%;
  float: left;
  margin: auto;
}
</style>