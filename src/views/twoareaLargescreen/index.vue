<!--
* @创建人: 王怀德
* @具体功能: 辽宁“两区”监测一张图
-->
<template>
  <div id="twoareaLargescreen">
    <largeScreenTopTitle
      :largeScreenTopTitleData="largeScreenTopTitleData"
    ></largeScreenTopTitle>
    <div class="main">
      <leftTop></leftTop>
      <leftMiddle></leftMiddle>
      <leftBottom></leftBottom>
    </div>
  </div>
</template>
<script>
// 页面顶部标题
import largeScreenTopTitle from "../../components/largeScreenTopTitle/index.vue";
// 页面顶部标题的背景图片
import TopTitle_bg from "./image/common/TopTitle_bg.png";
// 左图表一组件-xxx农业产品基础信息
import leftTop from "./common/left/leftTop.vue";
// 左图表二组件-xxx两区数据情况
import leftMiddle from "./common/left/leftMiddle.vue";
// 左图表三组件-xxx两区分布概况
import leftBottom from "./common/left/leftBottom.vue";
export default {
  name: "twoareaLargescreen",
  // 注册引用的组件
  components: {
    largeScreenTopTitle,
    leftTop,
    leftMiddle,
    leftBottom,
  },
  data() {
    return {
      /*页面顶部标题的背景数据
        backgroundImageUrl=背景图片资源
        path=跳转路径
      */
      largeScreenTopTitleData: {
        backgroundImageUrl: TopTitle_bg,
        path: "两区",
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
#twoareaLargescreen {
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/image/largeScreen_backgroundImage.png");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  > .main {
    flex: 1;
    padding: 0 24px 16px;
    position: relative;
  }
}
</style>
