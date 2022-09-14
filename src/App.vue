<template>
  <div id="app_main">
    <left-nav></left-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftNav from "@/components/leftNav/index.vue";
import screen from "./views/common/js/screen";
export default {
  name: "App",
  mixins: [screen],
  components: {
    LeftNav,
  },
  data() {
    return {};
  },
};
</script>


<style lang="scss">
#app_main {
  display: flex;
}
</style>
