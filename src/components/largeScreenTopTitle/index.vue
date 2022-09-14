<!--
* @创建人: 王怀德
* @具体功能: 大屏顶部标题
-->
<template>
  <div
    id="largeScreenTopTitle"
    :style="{
      background: `url(${largeScreenTopTitleData.backgroundImageUrl})`,
    }"
  >
    <div class="left_time">
      {{ time }}
    </div>
    <div class="right_jumpBtn pointer">
      进入监管系统
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "largeScreenTopTitle",
  props: {
    largeScreenTopTitleData: {
      type: Object,
      default: () => {
        return {
          backgroundImageUrl: "",
          path: "",
        };
      },
    },
  },
  // 注册引用的组件
  components: {},
  data() {
    return {
      time: null,
    };
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {
    this.init();
  },
  // 生命vue函数
  methods: {
    init() {
      // 获取当前时间
      this.time = this.$common.get_current_time("yyyy-MM-dd HH:mm:ss"); // 预防刷新会有一秒时间没有时间数据展示
      setInterval(() => {
        this.time = this.$common.get_current_time("yyyy-MM-dd HH:mm:ss");
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
#largeScreenTopTitle {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 88px;
  background-size: 100% !important;
  background-repeat: no-repeat !important;
  color: #f3feff;
  > .left_time {
    text-shadow: 0 2px 0 rgba(14, 0, 78, 0.8);
    font-family: BebasNeue;
    font-size: 20px;
    margin: 24px;
  }
  > .right_jumpBtn {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 138px;
    height: 34px;
    justify-content: center;
    font-family: PingFangSC;
    font-size: 14px;
    font-weight: 500;
    background-image: url("./image/RightBtn_bg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 16px;
    > div {
      width: 15px;
      height: 15px;
      background-image: url("./image/RightBtn_bgIcon.png");
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
}
</style>
