<!--
* @创建人: 王怀德
* @具体功能: Progress 环形进度条渐变色组件
-->
<template>
  <!-- 自定义svg , 在需要更改的地方使用即可 (目前作用于 设置 elementui 环形进度条的渐变色)  -->
  <svg width="100%" height="100%">
    <!-- 渐变颜色一 通过id获取  -->
    <defs>
      <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: #00abff; stop-opacity: 1" />
        <stop offset="50%" style="stop-color: #96ffbd; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #00faff; stop-opacity: 1" />
      </linearGradient>
    </defs>
    <!--  渐变颜色二 通过id获取 -->
    <defs>
      <linearGradient id="dismantle" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: #00daff; stop-opacity: 0.8" />
        <stop offset="20%" style="stop-color: #f395ff; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #6f5aff; stop-opacity: 1" />
      </linearGradient>
    </defs>
  </svg>
</template>
<script>
export default {
  name: "progressColor",
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
</style>
