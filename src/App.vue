<template>
  <div id="app">
    <!-- <home /> -->
    <router-view />
  </div>
</template>

<script>
import Home from "./views/home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
</style>
