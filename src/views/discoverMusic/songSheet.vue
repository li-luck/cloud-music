<template>
  <div class="songSheet">
    <div class="top">
      <h3>热门标签</h3>
      <ul>
        <li v-for="(item, i) in catList" :key="i" @click="getSongSheet(item)">
          {{ item }}
        </li>
      </ul>
    </div>

    <recommend
      :list="songList"
      :width="width"
      :height="height"
      @clickRecomCard="clickRecomCard"
      class="recommend"
    />
  </div>
</template>

<script>
import Recommend from "../../components/common/recommend";

export default {
  components: { Recommend },
  data() {
    return {
      catList: [
        "华语",
        "流行",
        "摇滚",
        "民谣",
        "电子",
        "另类/独立",
        "轻音乐",
        "综艺",
        "影视原声",
        "ACG",
      ],
      cat: "华语",
      songList: [],
      width: 250,
      height: 320,
    };
  },
  created() {
    this.getSongSheet(this.cat);
  },
  methods: {
    getSongSheet(cat) {
      this.axios.get(`top/playlist?cat=${cat}`).then((result) => {
        console.log(result);
        this.songList = result.data.playlists;
      });
    },
    /**点击歌单     获取歌单详情*/
    clickRecomCard(id) {
      this.$router.push({
        path: "/song-detail",
        query: { id: id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.songSheet {
  .top {
    width: 100%;
    margin: 20px;
    float: left;
  }
  .recommend {
    float: left;
    width: 100%;
  }
  h3,
  ul > li {
    float: left;
    list-style: none;
  }
  ul > li {
    margin: 2px 0 0 15px;
  }
  ul > li:hover {
    color: red;
    cursor: pointer;
  }
}
</style>