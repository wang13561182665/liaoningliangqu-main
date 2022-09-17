<!--
* @创建人: 王怀德
* @具体功能: 没有地图界面下的主体内容标题
-->
<template>
  <div class="rightTopTitle">
    {{ titleText }}
  </div>
</template>
<script>
export default {
  name: "rightTopTitle",
  props: {
    titleText: {
      type: String,
      default: "",
    },
  },
  // 注册引用的组件
  components: {},
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
.rightTopTitle {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.04);
  height: 56px;
  line-height: 56px;
  padding: 0 24px;
  font-family: PingFangSC;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #0c203d;
}
</style>
