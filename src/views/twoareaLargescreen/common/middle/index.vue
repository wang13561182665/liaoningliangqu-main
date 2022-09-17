<!--
* @创建人: 王怀德
* @具体功能: 
-->
<template>
  <div class="MiddleIndex">
    <div class="top_left">
      <regionAndDate></regionAndDate>
    </div>
    <Map></Map>
  </div>
</template>
<script>
import regionAndDate from "../../../../components/regionAndDate/index.vue";
import Map from "../../../../components/Map/index.vue";
export default {
  name: "MiddleIndex",
  // 注册引用的组件
  components: {
    regionAndDate,
    Map,
  },
  data() {
    return {};
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {},
  // 生命vue函数
  methods: {},
};
</script>

<style scoped lang="scss">
.MiddleIndex {
  background: #0005;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  > .top_left {
    position: absolute;
    z-index: 9;
    top: 16px;
    left: 504px;
  }
}
</style>
