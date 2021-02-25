<template>
  <div class="box">
    <tabs :list="tabList">
      <div class="video" slot="videoChild">视频</div>
      <div class="MV" slot="MV"><mvs /></div>
    </tabs>
  </div>
</template>

<script>
import Tabs from "../../components/common/tabs.vue";
import mvs from "./MV.vue";
export default {
  name: "videos",
  components: { Tabs, mvs },
  data() {
    return {
      tabList: [
        { label: "视频", name: "videoChild", state: true },
        { label: "MV", name: "MV", state: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  .MV,
  .video {
    width: 100%;
    height: 100%;
  }
}
</style>