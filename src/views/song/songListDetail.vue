<template>
  <el-table
    :data="songList"
    @row-dblclick="columnClick"
    stripe
    style="width: 100%"
  >
    <el-table-column type="index" label="编号"> </el-table-column>
    <el-table-column prop="name" label="音乐标题" width="240">
    </el-table-column>
    <el-table-column prop="ar[0].name" label="歌手"> </el-table-column>
    <el-table-column prop="al.name" label="专辑名"> </el-table-column>
    <el-table-column prop="dt" label="时长" width="180"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "songListDetail",
  props: ["songList"],
  data() {
    return {
      url: "",
    };
  },
  created() {},
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     vm.songSheetId = to.query.id;
  //   });
  // },
  methods: {
    columnClick(item) {
      console.log("点击的歌曲", item);
      //获取点击音乐的url
      this.axios
        .get(`song/url?id=${item.id}`)
        .then((result) => {
          console.log(result);
          this.url = result.data.data[0].url;
        })
        .then(() => {
          this.$store.commit("changeSongDetail", item);
          this.$store.commit("changePlay", item.id);
          this.$store.commit("changePlayUrl", this.url);
          this.$store.commit("changePlayState", "true");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>