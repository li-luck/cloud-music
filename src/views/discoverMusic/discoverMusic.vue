<template>
  <div class="box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="personality">
        <div class="person">
          <personality />
        </div>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="songSheet">
        <div class="songsheet">
          <song-sheet />
        </div>
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
import Personality from "../discoverMusic/personality";
import SongSheet from "../discoverMusic/songSheet";

import axios from "axios";
export default {
  name: "discover-music",
  components: {
    Personality,
    SongSheet,
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
  .person,
  .songsheet {
    width: 100%;
    height: 1000px;
  }
}
</style>