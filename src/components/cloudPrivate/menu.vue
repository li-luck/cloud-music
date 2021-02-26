<template>
  <div class="box">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :router="true"
    >
      <el-menu-item-group title="推荐">
        <el-menu-item index="/discover-music">发现音乐</el-menu-item>
        <el-menu-item index="/video">视频</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="我的音乐">
        <el-menu-item index="/music-cloud">我的音乐云盘</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="创建的歌单"> </el-menu-item-group>
      <el-menu-item-group title="收藏的歌单"> </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "cloudMenu",
  data() {
    return {};
  },
  methods: {
    clickItem() {
      console.log(this.$route.path);
      this.$router.push({ path: "/video" });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
.el-menu {
  border: none;
}
.el-menu-item-group {
  text-align: left;
}
</style>