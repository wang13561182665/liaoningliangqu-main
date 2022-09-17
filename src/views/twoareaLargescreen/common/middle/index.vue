<!--
* @创建人: 王怀德
* @具体功能: 
-->
<template>
  <div class="MiddleIndex">
    <div class="top_left">
      <regionAndDate :regionAndDateData="regionAndDateData"></regionAndDate>
    </div>
    <div class="right_bottom">
      <legendIcon :legendIconData ="legendIconData"></legendIcon>
    </div>
    <div class="left_bottom">
      <layerToggle :layerToggleData ="layerToggleData"></layerToggle>
    </div>
    <Map></Map>
  </div>
</template>
<script>
import regionAndDate from "../../../../components/regionAndDate/index.vue";
import legendIcon from "../../../../components/legendIcon/index.vue";
import layerToggle from "../../../../components/layerToggle/index.vue";
import Map from "../../../../components/Map/index.vue";
export default {
  name: "MiddleIndex",
  // 注册引用的组件
  components: {
    regionAndDate,
    legendIcon,
    layerToggle,
    Map,
  },
  data() {
    return {
      // 地区和时间选择组件的模式（dark深色、undertint浅色）
      regionAndDateData: {
        type: 'dark',
      },
      // 图例图标的模式（dark深色、undertint浅色）
      legendIconData: {
        type: "dark",
        list: [
          {
            name: "玉米",
            color: "#00ddff",
          },
          {
            name: "水稻",
            color: "#ffe449",
          },
          {
            name: "大豆",
            color: "#ff71f4",
          },
        ],
      },
      // 切换地图图层组件的模式（dark深色、undertint浅色）
      layerToggleData: {
        type: 'dark',
      },
    };
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
  > .right_bottom {
    position: absolute;
    z-index: 9;
    top: 554px;
    right: 496px;
  }
  > .left_bottom {
    position: absolute;
    z-index: 9;
    bottom: 328px;
    left: 496px;
  }
}
</style>
