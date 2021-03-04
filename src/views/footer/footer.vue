<template>
  <div class="box">
    <el-row>
      <el-col :span="3">
        <el-image :src="songimgUrl" style="width: 70px; height: 60px">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <section v-if="songDetail.al">
          <span>{{ songDetail.al.name }}</span>
          <span>{{ songDetail.ar[0].name }}</span>
        </section>
      </el-col>
      <!--一首 暂停 下一首控件-->
      <el-col :span="3">
        <img src="@/assets/imgs/prev.png" @click="prevMusic" alt="" />

        <img
          v-if="isPlay"
          src="@/assets/imgs/pauseMusic.png"
          alt=""
          @click="playMusic"
        />

        <img
          v-else
          src="@/assets/imgs/playMusic.png"
          alt=""
          @click="playMusic"
        />

        <img src="@/assets/imgs/next.png" alt="" @click="nextMusic" />
      </el-col>

      <el-col :span="12">
        <!--秒数通过 过滤器处理成看得懂的样式-->
        <span>{{ musicDuration | timeFormat }}</span>

        <!--音乐播放进度条-->
        <el-slider
          v-model="musicDuration"
          :max="totalDuration"
          @change="musicDurationChange"
          :show-tooltip="false"
        ></el-slider>

        <span>{{ totalDuration | timeFormat }}</span>
      </el-col>

      <el-col :span="6">
        <!--音量控制-->
        <img
          src="@/assets/imgs/laba.png"
          v-if="musicVolume !== 0"
          alt=""
          @click="silence"
        />

        <img
          src="@/assets/imgs/shutUp.png"
          v-else
          alt=""
          @click="silence"
          style="position: absolute; top: 6px; left: 15%; cursor: pointer"
        />

        <img
          src="@/assets/imgs/songList.png"
          alt=""
          @click="clickSongMenu"
          style="position: absolute; top: 10px; right: 9%; cursor: pointer"
        />

        <el-slider
          v-model="musicVolume"
          :show-tooltip="false"
          @change="musicVolumeChange"
        >
        </el-slider>
      </el-col>
    </el-row>

    <audio v-if="songUrl" :src="songUrl" autoplay class="audio"></audio>
  </div>
</template>

<script>
export default {
  name: "home-footer",
  data() {
    return {
      songList: [], //歌单列表
      audio: null,
      isPlay: false, //默认是否在播放
      musicDuration: 0, //当前音乐的进度条
      totalDuration: 0, //总进度条
      musicVolume: 20,
      musicId: null, //当前音乐id
      songUrl: "",
      songimgUrl: "",
      songDetail: {}, //播放的音乐详情
      drawer: false,
    };
  },
  watch: {
    "$store.state.playSongID"(newv) {
      if (this.$store.state.playState == "true") {
        this.axios
          .get(`song/url?id=${newv}`)
          .then((result) => {
            this.isPlay = true;
            this.musicId = newv;
            this.songUrl = result.data.data[0].url;
            this.songDetail = this.$store.state.songDetail;
            this.songimgUrl = this.songDetail.al.picUrl;
          })
          .then(() => {
            this.audio = document.querySelector(".audio");
            this.musicVolumeChange();
          });
      }
    },
  },
  created() {
    this.axios
      .get(`song/detail?ids=${this.$store.state.songIds}`)
      .then((res) => {
        this.songList = res.data.songs;
      });
  },
  methods: {
    playMusic() {
      if (this.audio) {
        if (this.audio.paused == false) {
          this.audio.pause();
          this.isPlay = false;
        } else {
          this.audio.play();
          this.isPlay = true;
        }
      }
    },
    //上一曲
    prevMusic() {
      this.getSong("prev");
    },
    //下一曲
    nextMusic() {
      this.getSong("next");
    },
    getSong(type) {
      this.axios
        .get(`song/detail?ids=${this.$store.state.songIds}`)
        .then((res) => {
          console.log("歌单---", res.data.songs);
          this.songList = res.data.songs;
          this.songList.forEach((ele, index, arr) => {
            if (ele.id == this.musicId && type == "next") {
              if (index != arr.length - 1)
                this.$store.commit("changeSongDetail", arr[index + 1]);
              else this.$store.commit("changeSongDetail", arr[0]);
            }
            if (ele.id == this.musicId && type == "prev") {
              if (index != 0)
                this.$store.commit("changeSongDetail", arr[index - 1]);
              else this.$store.commit("changeSongDetail", arr[arr.length - 1]);
            }
          });

          const item = this.$store.state.songDetail;
          this.axios.get(`song/url?id=${item.id}`).then((result) => {
            this.$store.commit("changePlay", item.id);
            this.$store.commit("changePlayUrl", result.data.data[0].url);
          });
        });
    },
    silence() {
      if (this.musicVolume !== 0) {
        this.volumeChange(0);
        this.musicVolume = 0;
      } else {
        this.volumeChange(0.2);
        this.musicVolume = 20;
      }
    },
    musicVolumeChange() {
      this.volumeChange(this.musicVolume / 100);
    },
    /**真正改变音量 */
    volumeChange(sum) {
      if (this.audio) {
        this.audio.volume = sum;
        this.audio.ontimeupdate = () => {
          this.musicDuration = this.audio.currentTime;
          this.totalDuration = this.audio.duration;
          if (this.audio.ended == "true") {
            this.isPlay = false;
          }
        };
      }
    },
    /**拖动滑块改变播放位置 */
    musicDurationChange() {
      if (this.totalDuration === 0) return;
      this.audio.currentTime = this.musicDuration;
      // this.audio.currentTime = val;
    },
    clickSongMenu() {
      this.drawer = !this.drawer;
      const obj = {
        drawer: this.drawer,
        songList: this.songList,
      };
      this.$emit("getDrawer", obj);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}

.el-col:nth-child(1) {
  .el-image,
  section {
    float: left;
  }
  section {
    width: calc(100% - 75px);
    height: 60px;
    span {
      height: 30px;
      width: 100%;
      float: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.el-col:nth-child(2) {
  img:nth-child(1) {
    border-radius: 100%;
    cursor: pointer;
  }
  img:nth-child(2) {
    border-radius: 100%;
    cursor: pointer;
    margin-left: 25px;
    width: 50px;
    height: 50px;
  }
  img:nth-child(3) {
    border-radius: 100%;
    cursor: pointer;
    margin-left: 25px;
  }
}
.el-col:nth-child(3) {
  position: relative;
  margin: 10px 0;
  .el-slider {
    width: 80%;
    margin: auto;
  }
  span,
  .el-slider {
    float: left;
  }
  span {
    margin: 8px 20px;
  }
}
.el-col:nth-child(4) {
  position: relative;
  margin: 10px 0;
  img:nth-child(1) {
    position: absolute;
    top: 6px;
    left: 15%;
    cursor: pointer;
  }
  .el-slider {
    width: 40%;
    margin: auto;
  }
}
</style>