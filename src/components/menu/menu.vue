<template>
  <div class="box">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item-group title="推荐">
        <el-menu-item index="1-1">发现音乐</el-menu-item>
        <el-menu-item index="1-2">视频</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="我的音乐">
        <el-menu-item index="2-1">我的音乐云盘</el-menu-item>
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