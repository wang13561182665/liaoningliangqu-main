<!--
* @创建人: 王怀德
* @具体功能: 辽宁“两区”监测一张图
-->
<template>
  <div>
    <div id="map" ref="olMap"></div>
  </div>
</template>
<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
export default {
  name: "OlMap",
  // 注册引用的组件
  components: {},
  data() {
    return {
      map: null,
      asd: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: "210304",
            properties: {
              name: "立山区",
              cp: [123.029091, 41.150401],
              childNum: 1,
            },
            geometry: {
              type: "Polygon",
              coordinates: [
                [123.1220703125, 41.0693359375],
                [123.109375, 41.05078125],
                [123.10546875, 41.0693359375],
                [123.103515625, 41.0791015625],
                [123.0947265625, 41.0712890625],
                [123.0947265625, 41.0712890625],
                [123.0810546875, 41.0703125],
                [123.0751953125, 41.0712890625],
                [123.07421875, 41.0732421875],
                [123.07421875, 41.07421875],
                [123.07421875, 41.0771484375],
                [123.0703125, 41.0771484375],
                [123.0693359375, 41.078125],
                [123.068359375, 41.080078125],
                [123.068359375, 41.0810546875],
                [123.0693359375, 41.0830078125],
                [123.0712890625, 41.0849609375],
                [123.0732421875, 41.087890625],
                [123.0693359375, 41.08984375],
                [123.0693359375, 41.091796875],
              ],
            },
          },
        ],
      },
    };
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {
    this.initMap();
  },
  // 生命vue函数
  methods: {
    initMap() {
      this.map = new Map({
        target: "map", // 指向对象
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          projection: "EPSG:4326",
          center: [123.029091, 41.150401],
          zoom: 8,
        }),
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../views/common/scss/common.scss";
#map {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
