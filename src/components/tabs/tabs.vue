<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="个性推荐" name="personality">
      <slot name="personality"></slot>
    </el-tab-pane>
    <el-tab-pane label="歌单" name="songSheet">
      <slot name="songSheet"></slot>
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
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
</style>