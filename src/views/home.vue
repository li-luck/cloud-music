<template>
  <div id="box">
    <el-container>
      <el-header>
        <img src="./../assets/logo.png" alt="" class="logo" />
        <span>鸿运福音</span>
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
          <router-view></router-view>
          <div class="drawer" v-if="drawer">
            <h2>播放列表</h2>
            <el-table
              :data="songList"
              :show-header="false"
              stripe
              style="width: 100%"
            >
              <el-table-column prop="name" label="音乐标题"> </el-table-column>
              <el-table-column prop="ar[0].name" label="歌手">
              </el-table-column>
            </el-table>
          </div>
        </el-main>
      </el-container>
      <el-footer>
        <home-footer @getDrawer="getDrawer"></home-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import CloudMenu from "./../components/cloudPrivate/menu";
import HomeFooter from "./../views/footer/footer";

export default {
  components: {
    CloudMenu,
    HomeFooter,
  },
  data() {
    return {
      input2: "",
      drawer: false,
      songList: [],
    };
  },
  created() {},
  methods: {
    getDrawer(val) {
      this.drawer = val.drawer;
      this.songList = val.songList;
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  background: #ec4141;
  line-height: 60px;
  padding: 0 20px;
  z-index: 999;

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
      margin-bottom: -15px;
    }
  }
}
.el-aside {
  position: fixed;
  left: 0;
  top: 60px;
  height: 100%;
  background-color: white;
  color: #333;
  text-align: center;
  width: 240px;
  border-right: 1px solid rgb(223, 220, 220);
  z-index: 666;
}

.el-main {
  position: absolute;
  left: 200px;
  top: 60px;
  width: calc(100% - 200px);
  background-color: white;
  color: #333;
  text-align: center;
  .drawer {
    position: fixed;
    right: 0;
    bottom: 60px;
    width: 500px;
    height: calc(100% - 120px);
    box-shadow: 0 0 1px 1px rgb(223, 223, 223);
    background: white;
    overflow: auto;
    h2 {
      text-align: left;
      padding: 10px 10px;
    }
  }
}
.el-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px !important;
  padding: 0;
  background: white;
  border-top: 1px solid rgb(223, 220, 220);
  z-index: 888;
}
</style>