<template>
  <div class="box">
    <div class="top">
      <img :src="information.coverImgUrl" alt="" />
      <div class="detail">
        <section>
          <el-tag type="danger">歌单</el-tag>
          <h2>{{ information.name }}</h2>
        </section>
        <p>
          {{ information.creator.nickname }}
          {{ information.createTime | timeToDate }}
        </p>
        <p>
          <span>标签</span>{{ information.tags[0] }}/{{
            information.tags[1]
          }}/{{ information.tags[2] }}
        </p>
        <p>
          <span>p歌曲：</span> {{ information.creator.nickname }}
          <span>播放：</span>{{ information.playCount }}
        </p>
        <p><span>简介</span> {{ information.description }}</p>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "songListDetail",
  data() {
    return {
      information: {},
      songId: Number,
    };
  },
  created() {
    this.axios.get(`playlist/detail?id=${this.$route.query.id}`).then((res) => {
      console.log(res);
      this.information = res.data.playlist;
    });
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(to);
      vm.information = to.query.id;
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.top {
  height: 250px;
  img,
  .detail {
    float: left;
  }
  img {
    width: 230px;
    height: 230pox;
  }
  .detail {
    padding: 0 20px;
    width: calc(100% - 300px);
    text-align: left;
    .el-tag,
    h2 {
      float: left;
      margin-right: 10px;
    }
    h2 {
      width: calc(100% - 70px);
    }
    section,
    p {
      float: left;
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>