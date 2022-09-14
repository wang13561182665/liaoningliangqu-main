<!--
* @创建人: 王怀德
* @具体功能: 辽宁“两区”监测一张图-左边顶部组件-xxx农业产品基础信息
-->
<template>
  <div class="leftTop">
    <chartTitle>农业产品基础信息</chartTitle>
    <div class="content">
      <div class="top">
        <div>
          <h3 class="title_text">粮食生产功能区面积</h3>
          <div class="data_text">
            <h4 class="text_ellipsis">9999.31</h4>
            <span>万亩</span>
          </div>
        </div>
        <div>
          <h3 class="title_text">重要农产品生产保护区</h3>
          <div class="data_text">
            <h4 class="text_ellipsis">632</h4>
            <span>万亩</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div>
            <h3 class="title_text">玉米</h3>
            <div class="data_text">
              <h4 class="text_ellipsis">31</h4>
              <span>万亩</span>
            </div>
          </div>
          <div>
            <h3 class="title_text">玉米</h3>
            <div class="data_text">
              <h4 class="text_ellipsis">31</h4>
              <span>万亩</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div>
            <h3 class="title_text">玉米</h3>
            <div class="data_text">
              <h4 class="text_ellipsis">31</h4>
              <span>万亩</span>
            </div>
          </div>
        </div>
      </div>
      <div class="centre">
        <div class="circular">
          <div>
            <h4>2700</h4>
            <span>万亩</span>
          </div>
          <h3 class="title_text">两区总面积</h3>
        </div>
        <div class="tray"></div>
      </div>
    </div>
  </div>
</template>
<script>
// 图表组件的标题
import chartTitle from "@/components/chartTitle/index.vue";
export default {
  name: "leftTop",
  // 注册引用的组件
  components: {
    chartTitle,
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
.leftTop {
  width: 456px;
  color: #f3feff;
  > .content {
    height: 296px;
    margin-bottom: 16px;
    background-image: url("../../image/leftTop/echarts_456x296bg.png");
    background-repeat: no-repeat;
    background-size: 456px 296px;
    position: relative;
    // 组件顶部样式（粮食生产功能区面积和重要农产品生产保护区展示样式）
    > .top {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: 32px 12px 0;
      > div {
        background-image: url("../../image/leftTop/top_bg.png");
        background-size: 164px 68px;
        width: 164px;
        height: 68px;
        > h3 {
          margin: 12px 12px 0;
        }
        > div {
          width: 140px;
          padding: 2px 12px;
          > h4 {
            max-width: 85px;
          }
        }
      }
    }
    // 组件底样式（各农作物和总面积数据展示）
    > .bottom {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      h3 {
        margin-bottom: 8px;
        background-image: url("../../image/common/arrow_colorffe449.png");
        background-size: 12px 12px;
        background-repeat: no-repeat;
        padding-left: 16px;
      }
      .data_text {
        padding-left: 16px;
      }
      > .left {
        margin: 25px 0 40px 25px;
        > div {
          margin-bottom: 28px;
          width: 120px;
          h4 {
            max-width: 75px;
          }
        }
      }
      > .right {
        margin: 60px 0 40px 25px;
        width: 130px;
        h4 {
          max-width: 75px;
        }
      }
    }
    > .centre {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -73px 0 0 -81px;
      width: 168px;
      height: 195px;
      > .circular {
        width: 168px;
        height: 168px;
        background-image: url("../../image/leftTop/circular_bg.png");
        background-repeat: no-repeat;
        background-size: 168px 168px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        > div {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;
          justify-content: center;
          align-items: flex-end;
          margin-bottom: 5px;
          > h4 {
            background-image: linear-gradient(
              to bottom,
              #ffcc61 4%,
              #f2ffc7 50%
            );
            font-family: BebasNeue;
            height: 30px;
            line-height: 30px;
            font-size: 30px;
            font-weight: bolder;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          > span {
            width: 28px;
            height: 14px;
            text-shadow: 0 1px 1px #0c1e4f;
            font-family: PingFangSC;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: normal;
            color: #ffe449;
          }
        }
      }
      > .tray {
        width: 168px;
        height: 122px;
        background-image: url("../../image/leftTop/tray_bg.png");
        background-repeat: no-repeat;
        background-size: 168px 122px;
        position: relative;
        top: -48px;
      }
    }
    // 公共样式
    .title_text {
      height: 14px;
      text-shadow: 1px 2px 0 rgba(12, 30, 79, 0.7);
      font-family: PingFangSC;
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      color: #9ef5ff;
    }
    .data_text {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-end;
      > h4 {
        font-weight: bolder;
        text-shadow: 0 4px 2px #0c1e4f;
        font-family: BebasNeue;
        font-size: 20px;
        margin-right: 3px;
      }
      > span {
        width: 32px;
        text-shadow: 0 1px 1px #0c1e4f;
        font-family: PingFangSC;
        font-size: 13px;
        font-weight: 100;
      }
    }
  }
}
</style>
