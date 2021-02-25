<template>
  <div class="box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.label"
        :name="item.name"
      >
        <slot :name="item.name" v-if="item.state"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "tabs",
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          { label: "个性推荐", name: "personality", state: true },
          { label: "歌单", name: "songSheet", state: false },
        ];
      },
    },
  },
  data() {
    return { activeName: "" };
  },
  created() {
    this.activeName = this.list[0].name;
  },
  methods: {
    handleClick(tab) {
      this.list.forEach((item) => {
        if (item.name == tab.name) {
          item.state = true;
        } else item.state = false;
      });
      console.log(tab.name);
      this.$emit("clickName", tab.name);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__nav {
  float: none;
  .el-tabs__active-bar {
    display: none;
  }
}
.box {
  width: 100%;
  height: 100%;
}
</style>