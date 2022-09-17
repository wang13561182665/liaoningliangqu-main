<!--
* @创建人: 王怀德
* @具体功能: 辽宁“两区”监测一张图-右边顶部组件：xxx作物种植情况(xxxx年)
-->
<template>
  <div class="rightTop">
    <chartTitle
      >{{ region.selectNmae }}两区数据情况({{ date.selectDate }}年)</chartTitle
    >
    <div class="content">
      <ul>
        <li>
          <div class="data_text">
            <h4 class="text_ellipsis">232232</h4> 
            <span>万亩</span>
          </div>
          <h3 class="title_text">玉米种植</h3>
        </li>
        <li>
          <div class="data_text">
            <h4 class="text_ellipsis">232232</h4>
            <span>万亩</span>
          </div>
          <h3 class="title_text">水稻种植</h3>
        </li>
      </ul>
      <ul>
        <li>
          <div class="data_text">
            <h4 class="text_ellipsis">51540</h4>
          </div>
          <h3 class="title_text">总面积(万亩)</h3>
        </li>
      </ul>
      <ul>
        <li>
          <div class="data_text">
            <h4 class="text_ellipsis">232232</h4>
            <span>万亩</span>
          </div>
          <h3 class="title_text">大豆种植</h3>
        </li>
        <li>
          <div class="data_text">
            <h4 class="text_ellipsis">232232</h4>
            <span>万亩</span>
          </div>
          <h3 class="title_text">非粮化面积</h3>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import chartTitle from "@/components/chartTitle/index.vue";
export default {
  name: "rightTop",
  // 注册引用的组件
  components: { chartTitle },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      region: (state) => state.regionAndDate.region,
      date: (state) => state.regionAndDate.date,
    }),
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
.rightTop {
  width: 456px;
  color: #f3feff;
  position: absolute;
  z-index: 9;
  right: 24px;
  top: 0;
  > .content {
    height: 296px;
    padding: 16px 24px 0;
    background-image: url("../../image/common/echarts_456x296bg.png");
    background-repeat: no-repeat;
    background-size: 456px 296px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    > ul {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      > li {
        background-image: url("../../image/rightTop/min_hexagon.png");
        background-repeat: no-repeat;
        background-size: 122px 122px;
        width: 122px;
        height: 122px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        h4 {
          max-width: 65px;
        }
      }
    }
    > ul:nth-child(2) {
      > li {
        width: 164px;
        height: 164px;
        background-image: url("../../image/rightTop/max_hexagon.png");
        background-repeat: no-repeat;
        background-size: 164px 164px;
        margin-top: 40px;
        h4 {
          max-width: 125px;
        }
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
      margin-bottom: 10px;
      > h4 {
        background-image: linear-gradient(to bottom, #9ef5ff 4%, #dffcff 50%);
        font-family: BebasNeue;
        height: 26px;
        line-height: 26px;
        font-size: 26px;
        font-weight: bolder;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
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
