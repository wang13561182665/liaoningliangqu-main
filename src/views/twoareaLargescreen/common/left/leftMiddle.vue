<!--
* @创建人: 王怀德
* @具体功能: 辽宁“两区”监测一张图-左边中部组件：xxx两区数据情况
-->
<template>
  <div class="leftMiddle">
    <chartTitle>{{ region.selectNmae }}两区数据情况</chartTitle>
    <div class="content">
      <div class="left">
        <div class="data_text">
          <h4 class="text_ellipsis">12</h4>
          <span>T</span>
        </div>
        <div class="title_text">现有数据</div>
      </div>
      <ul class="right">
        <li>
          <h3>遥感影像</h3>
          <h4 class="text_ellipsis">12</h4>
          <span> G </span>
        </li>
        <li>
          <h3>文档材料</h3>
          <h4 class="text_ellipsis">1.25</h4>
          <span> 个 </span>
        </li>
        <li>
          <h3>矢量地块</h3>
          <h4 class="text_ellipsis">0</h4>
          <span> G </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// 图表组件的标题
import chartTitle from "@/components/chartTitle/index.vue";
export default {
  name: "leftMiddle",
  // 注册引用的组件
  components: {
    chartTitle,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      region: (state) => state.regionAndDate.region,
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
.leftMiddle {
  width: 456px;
  color: #f3feff;
  position: absolute;
  z-index: 9;
  left: 24px;
  top: 352px;
  > .content {
    height: 272px;
    margin-bottom: 16px;
    background-image: url("../../image/common/echarts_456x272bg.png");
    background-repeat: no-repeat;
    background-size: 456px 272px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 32px 28px 0 32px;
    > .left {
      background-image: url("../../image/leftMiddle/left_bg.png");
      background-repeat: no-repeat;
      background-size: 186px 192px;
      width: 186px;
      height: 192px;
      padding-top: 33px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-start;
      > .data_text {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-end;
        > h4 {
          height: 32px;
          line-height: 32px;
          font-size: 32px;
          margin-right: 3px;
          text-shadow: 0 4px 2px #0c1e4f;
          font-family: BebasNeue;
          max-width: 130px;
        }
        > span {
          font-family: PingFangSC;
          font-size: 14px;
        }
      }
      .title_text {
        margin-top: 8px;
        height: 14px;
        text-shadow: 1px 2px 0 rgb(12 30 79 / 70%);
        font-family: PingFangSC;
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        color: #9ef5ff;
      }
    }
    > .right {
      > li {
        background-image: url("../../image/leftMiddle/data_bg.png");
        background-repeat: no-repeat;
        background-size: 186px 56px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 186px;
        height: 56px;
        margin-bottom: 12px;
        line-height: 56px;
        > h3 {
          background-image: url("../../image/common/arrow_colorffe449.png");
          background-repeat: no-repeat;
          background-size: 12px 12px;
          background-position: 16px center;
          padding-left: 36px;
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 500;
        }
        > h4 {
          margin: 0 3px;
          flex: 1;
          text-shadow: 0 4px 2px #0c1e4f;
          font-family: BebasNeue;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: right;
        }
        > span {
          padding-right: 10px;
          text-shadow: 0 1px 1px #0c1e4f;
          font-family: PingFangSC;
          font-size: 14px;
          letter-spacing: normal;
        }
      }
    }
  }
}
</style>
