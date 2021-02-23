<template>
  <div id="box">
    <el-container>
      <el-header>
        <img src="./../assets/logo.png" alt="" class="logo" />
        <span>魔音灌耳</span>
        <el-input
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
        <div class="rightContainer">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <span> 未登录 </span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <cloudMenu></cloudMenu>
        </el-aside>
        <el-main>
          <tabs>
            <div class="home-swiper" slot="personality">
              <personal-swiper :list="swiperList"></personal-swiper>
            </div>
            <div class="recommend" slot="personality">
              <recommend :list="recommendList"></recommend>
            </div>
          </tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CloudMenu from "./../components/menu/menu";
import Tabs from "./../components/tabs/tabs";
import PersonalSwiper from "./../components/swiper/swiper";
import Recommend from "./../components/recommend/recommend";

import axios from "axios";

export default {
  name: "home",
  components: {
    CloudMenu,
    Tabs,
    PersonalSwiper,
    Recommend,
  },
  data() {
    return {
      input2: "",
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
#box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-container:nth-child(1) {
  width: 100%;
  height: 100%;
}
.el-header {
  background: #ec4141;
  line-height: 60px;
  padding: 0 20px;
  display: flex;

  .logo {
    width: 25px;
    height: 25px;
    margin: 15px 10px;
    border-radius: 100px;
  }
  span {
    font-size: 20px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: 500;
    color: white;
  }
  ::v-deep .el-input {
    width: 240px;
    font-size: 12px;
    margin-left: 30px;
    .el-input__inner {
      height: 30px;
      border-radius: 30px;
    }
  }
  .rightContainer {
    position: absolute;
    right: 0;
    margin-right: 20px;
    height: 60px;
    line-height: 60px;
    width: 130px;
    .el-avatar {
      margin-top: 15px;
      margin-right: 10px;
    }
    span {
      cursor: pointer;
    }
  }
}
.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  width: 240px;
  border-right: 1px solid rgb(151, 151, 151);
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;

  .home-swiper {
    width: 100%;
    height: 350px;
    float: left;
    margin-bottom: 40px;
    margin-top: 40px;
  }

  .recommend {
    width: 100%;
    float: left;
    margin: auto;
  }
}
</style>