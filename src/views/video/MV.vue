<template>
  <div class="box">
    <div class="fenlei">
      <section>
        <h3>地区</h3>
        <ul>
          <li
            v-for="(item, index) in area"
            :key="index"
            @click="clickLi(item, 'area')"
            :style="item == itemA ? 'color: red' : 'black'"
          >
            {{ item }}
          </li>
        </ul>
      </section>
      <section>
        <h3>分类</h3>
        <ul>
          <li
            v-for="(item, index) in calssify"
            :key="index"
            @click="clickLi(item, 'type')"
            :style="item == itemT ? 'color: red' : 'black'"
          >
            {{ item }}
          </li>
        </ul>
      </section>
      <section>
        <h3>排序</h3>
        <ul>
          <li
            v-for="(item, index) in sort"
            :key="index"
            @click="clickLi(item, 'order')"
            :style="item == itemO ? 'color: red' : 'black'"
          >
            {{ item }}
          </li>
        </ul>
      </section>
    </div>
    <recommend
      :list="videoList"
      :width="width"
      :height="height"
      class="recommend"
    ></recommend>
  </div>
</template>

<script>
import Recommend from "../../components/common/recommend.vue";
export default {
  name: "mvs",
  components: {
    Recommend,
  },
  data() {
    return {
      videoList: [],
      area: ["全部", "内地", "港台", "欧美", "日本", "韩国"],
      calssify: ["全部", "官方版", "原生", "现场版", "网易出品"],
      sort: ["上升最快", "最热", "最新"],
      width: 250,
      height: 230,
      itemA: "全部",
      itemT: "全部",
      itemO: "上升最快",
    };
  },
  created() {
    this.Init();
  },
  methods: {
    Init(area, type, order) {
      this.axios
        .get(`/mv/all?area=${area}&&type=${type}&&order=${order}`)
        .then((result) => {
          this.videoList = result.data.data.map((item) => {
            this.$set(item, "coverImgUrl", item.cover);
            return item;
          });
        });
    },
    clickLi(item, type) {
      switch (type) {
        case "area":
          this.itemA = item;
          this.Init(this.itemA, this.itemT, this.itemO);
          break;
        case "type":
          this.itemT = item;
          this.Init(this.itemA, this.itemT, this.itemO);
          break;
        case "order":
          this.itemO = item;
          this.Init(this.itemA, this.itemT, this.itemO);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  .fenlei,
  .recommend {
    width: 100%;
  }
  .fenlei {
    height: 100px;
    section {
      width: 100%;
      ul > li:hover {
        color: red;
        cursor: pointer;
      }
    }
    section,
    h3,
    ul > li {
      float: left;
      list-style: none;
      margin: 5px 0 0 20px;
    }
  }
  .recommend {
    margin-top: 50px;
  }
}
</style>