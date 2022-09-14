<!--
* @创建人: 王怀德
* @具体功能: 图表组件的标题
-->
<template>
  <div
    ref="chartTitle"
    class="chartTitle"
    :style="{
      background: `url(${backgroundImageUrl})`,
    }"
  >
    <slot>{{ title }}</slot>
  </div>
</template>
<script>
import chartTitle456x40bg from "./image/chartTitle-456x40bg.png";
import chartTitle928x40bg from "./image/chartTitle-928x40bg.png";
export default {
  name: "chartTitle",
  // 注册引用的组件
  components: {},
  data() {
    return {
      title: "标题",
      backgroundImageUrl: '',
    };
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {
    let chartTitle = this.$refs.chartTitle.clientWidth;
    switch (chartTitle) {
      case 456:
        this.backgroundImageUrl = chartTitle456x40bg;
        break;
      case 928:
        this.backgroundImageUrl = chartTitle928x40bg;
        break;
    }
  },
  // 生命vue函数
  methods: {},
};
</script>

<style scoped lang="scss">
.chartTitle {
  width: 100%;
  height: 40px;
  background-repeat: no-repeat;
  text-shadow: 1px 2px 0 rgba(14, 0, 78, 0.7);
  font-family: SourceHanSansCN;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  padding: 0 16px;
  color: #f3feff;
}
</style>
