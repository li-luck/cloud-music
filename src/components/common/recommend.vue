<template>
  <div class="box">
    <div
      class="card-box"
      v-for="(item, index) in list"
      :key="index"
      :style="{ width: width + 'px', height: height + 'px' }"
      @click="clickRecom(item)"
    >
      <el-card :style="{ width: width + 'px', height: height - 70 + 'px' }">
        <img :src="item.coverImgUrl" class="image" />
      </el-card>
      <span :title="item.name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    init() {},
    clickRecom(item) {
      console.log(item);
      this.$emit("clickRecomCard", item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
}
.card-box {
  float: left;
  margin: 5px 10px;
  .el-card {
    float: left;
    border-radius: 10px;
  }
  span {
    float: left;
    width: 100%;
    line-height: 70px;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>