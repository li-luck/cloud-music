<template>
  <div class="box">
    <div class="home-swiper">
      <personal-swiper :list="swiperList"></personal-swiper>
    </div>
    <div class="recommend">
      <h2>推荐歌单</h2>
      <br />
      <hr />
      <br />
      <recommend :list="recommendList"></recommend>
    </div>
  </div>
</template>

<script>
import PersonalSwiper from "../../components/common/swiper";
import Recommend from "../../components/common/recommend";

import axios from "axios";
export default {
  name: "personality",
  components: {
    PersonalSwiper,
    Recommend,
  },
  data() {
    return {
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
.box {
  width: 100%;
  height: 100%;
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

    h2 {
      text-align: left;
    }
  }
}
</style>