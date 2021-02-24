<template>
  <div class="box">
    <div class="card-box" v-for="(item, index) in list" :key="index">
      <el-card>
        <img :src="item.coverImgUrl" class="image" />
      </el-card>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: ["list"],
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    init() {},
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
}
.card-box {
  width: 250px;
  height: 320px;
  float: left;
  margin: 5px 10px;
  .el-card {
    width: 250px;
    height: 250px;
    float: left;
    border-radius: 10px;
  }
  span {
    float: left;
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