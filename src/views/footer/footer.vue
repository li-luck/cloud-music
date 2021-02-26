<template>
  <div class="box">
    <el-row>
      <!--一首 暂停 下一首控件-->
      <el-col :span="2.5">
        <img src="@/assets/imgs/prev.png" @click="changePrevMusic" alt="" />

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

        <img src="@/assets/imgs/next.png" alt="" @click="changeNextMusic" />
      </el-col>

      <el-col :span="12" :offset="2">
        <!--秒数通过 过滤器处理成看得懂的样式-->
        <span>{{ this.musicDuration | timeFormat }}</span>

        <!--音乐播放进度条-->
        <el-slider
          v-model="musicDuration"
          :max="totalDuration"
          @change="musicDurationChange"
          :show-tooltip="false"
        ></el-slider>

        <span>{{ totalDuration | timeFormat }}</span>
      </el-col>

      <el-col :span="5" :offset="1">
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
          @click="showRightPlayList"
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
  </div>
</template>

<script>
export default {
  name: "home-footer",
  data() {
    return {
      //默认是否在播放
      isPlay: false,
      //当前音乐的进度条
      musicDuration: 0,
      //总进度条
      totalDuration: 0,
      //音乐的音量
      musicVolume: 20,
    };
  },
  methods: {
    playMusic() {},
    changePrevMusic() {},
    changeNextMusic() {},
    silence() {},
    musicDurationChange() {},
    showRightPlayList() {},
    musicVolumeChange() {},
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}

.el-col:nth-child(1) {
  img:nth-child(1) {
    border-radius: 100%;
    cursor: pointer;
  }
  img:nth-child(2) {
    border-radius: 100%;
    cursor: pointer;
    margin-left: 25px;
    width: 40px;
    height: 40px;
  }
  img:nth-child(3) {
    border-radius: 100%;
    cursor: pointer;
    margin-left: 25px;
  }
}
.el-col:nth-child(2) {
  position: relative;
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
.el-col:nth-child(3) {
  position: relative;
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