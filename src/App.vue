<template>
  <div id="app">
    <!-- <home /> -->
    <router-view ref="home"></router-view>
  </div>
</template>

<script>
// import Home from "./views/home";
export default {
  name: "App",
  components: {
    // Home,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
