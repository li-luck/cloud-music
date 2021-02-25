<template>
  <div class="box">
    <tabs :list="tabList" @clickName="clickName">
      <div class="person" slot="personality"><personality /></div>
      <div class="songsheet" slot="songSheet"><song-sheet /></div>
    </tabs>
  </div>
</template>

<script>
import Personality from "../discoverMusic/personality";
import SongSheet from "../discoverMusic/songSheet";
import Tabs from "../../components/common/tabs";
export default {
  name: "discover-music",
  components: {
    Personality,
    SongSheet,
    Tabs,
  },
  data() {
    return {
      tabList: [
        { label: "个性推荐", name: "personality", state: true },
        { label: "歌单", name: "songSheet", state: false },
        { label: "排行榜", name: "rankingList", state: false },
        { label: "歌手", name: "song", state: false },
        { label: "最新音乐", name: "newmusic", state: false },
      ],
      activeName: "personality",
    };
  },
  created() {},
  methods: {
    /**接收点的哪一个tab */
    clickName(name) {
      console.log(name);
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