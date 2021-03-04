<template>
  <div class="box">
    <div class="top" v-if="information.name">
      <img :src="information.coverImgUrl" alt="" />
      <div class="detail">
        <section>
          <el-tag type="danger">歌单</el-tag>
          <h2>{{ information.name }}</h2>
        </section>
        <section>
          {{ information.creator.nickname }}
          {{ information.createTime | timeToDate }}
        </section>
        <section>
          <span>标签：</span>{{ information.tags[0] }}/{{
            information.tags[1]
          }}/{{ information.tags[2] }}
        </section>
        <section>
          <span>歌曲：</span> {{ information.trackCount }} <span>播放：</span
          >{{ information.playCount }}
        </section>
        <section>
          <el-collapse>
            <el-collapse-item
              :title="'简介：' + information.description.substring(0, 30)"
            >
              <div>{{ information.description }}</div>
            </el-collapse-item>
          </el-collapse>
        </section>
      </div>
    </div>
    <div class="content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">歌曲列表</el-menu-item>
        <el-menu-item index="2">评论</el-menu-item>
      </el-menu>
      <router-view :songList="songList"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      information: {},
      songSheetId: Number,
      songId: Number,
      songList: [],
    };
  },
  created() {
    this.songSheetId = this.$route.params.id
      ? this.$route.params.id
      : window.localStorage.getItem("songSheetId");
    this.getSongSheetTitle().then(() => {
      this.getSongList();
    });
  },
  mounted() {
    window.localStorage.setItem("songSheetId", this.songSheetId);
  },
  methods: {
    async getSongSheetTitle() {
      await this.axios
        .get(`playlist/detail?id=${this.songSheetId}`)
        .then((res) => {
          console.log("歌单信息", res);
          this.information = res.data.playlist;
        });
    },
    getSongList() {
      let ids = "";
      this.information.trackIds.forEach((ele) => {
        ids += ele.id + ",";
      });
      this.axios
        .get(`song/detail?ids=${ids.substring(0, ids.length - 1)}`)
        .then((res) => {
          console.log("歌单歌曲", res);
          this.songList = res.data.songs;
          this.songList.forEach((ele) => {
            const time = new Date(ele.dt);
            const mm = time.getMinutes();
            const ss = time.getSeconds();
            ele.dt = mm + ":" + ss;
          });
        })
        .then(() => {
          this.$router.push({ path: "/song-list" });
        });
    },
    handleSelect(key) {
      switch (key) {
        case "1":
          this.$router.push({ path: "/song-list" });
          break;
        case "2":
          this.$router.push({ path: "/song-comment" });
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style  lang="scss" scoped>
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
    .el-collapse {
      border: none;
    }
  }
}
</style>