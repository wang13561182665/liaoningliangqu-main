<!--
* @创建人: 王怀德
* @具体功能: 辽宁“两区”监测一张图-右边中部组件：xxx两区非粮化情况
-->
<template>
  <div class="rightMiddle">
    <chartTitle>{{ region.selectNmae }}两区数据情况</chartTitle>
    <div class="content">
      <div>
        <h3>目标作物占比</h3>
        <div>
          <h4 class="text_ellipsis">12.34</h4>
          <span>%</span>
        </div>
      </div>
      <ul>
        <li id="left_progress">
          <el-progress type="circle" :percentage="78" :width="130" color="#000">
            <template #default="{ percentage }">
              <div class="percentage-value">{{ percentage }}</div>
              <div class="percentage-label">非农化占比(%)</div>
            </template>
          </el-progress>
          <progressColor style="width: 0; height: 0"></progressColor>
        </li>
        <li id="right_progress">
          <el-progress type="circle" :percentage="100" :width="130" color="#000">
            <template #default="{ percentage }">
              <div class="percentage-value">{{ percentage }}</div>
              <div class="percentage-label">非农化占比(%)</div>
            </template>
          </el-progress>
          <progressColor style="width: 0; height: 0"></progressColor>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import chartTitle from "@/components/chartTitle/index.vue";
import progressColor from "@/components/progressColor/index.vue";
export default {
  name: "rightMiddle",
  // 注册引用的组件
  components: {
    chartTitle,
    progressColor,
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
.rightMiddle {
  width: 456px;
  color: #f3feff;
  position: absolute;
  z-index: 9;
  right: 24px;
  top: 352px;
  > .content {
    height: 272px;
    margin-bottom: 16px;
    padding: 12px;
    background-image: url("../../image/common/echarts_456x272bg.png");
    background-repeat: no-repeat;
    background-size: 456px 272px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    > div {
      background-image: url("../../image/rightMiddle/percentage_bg.png");
      background-repeat: no-repeat;
      background-size: 360px 78px;
      width: 360px;
      height: 78px;
      line-height: 78px;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: flex-end;
      padding-right: 68px;
      padding-left: 90px;
      > h3 {
        object-fit: contain;
        font-family: PingFangSC;
        font-size: 16px;
        font-weight: 500;
      }
      > div {
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: baseline;
        > h4 {
          flex: 1;
          text-align: right;
          padding: 0 5px;

          background-image: linear-gradient(to bottom, #ffcc61 4%, #f2ffc7 50%);
          font-family: BebasNeue;
          font-size: 30px;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        > span {
          text-shadow: 0 1px 1px #0c1e4f;
          font-family: PingFangSC;
          font-size: 14px;
          color: #ffe449;
        }
      }
    }
    > ul {
      margin-top: 16px;
      display: flex;
      flex-direction: row;
      padding: 0 62px;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;
      > li {
        background-image: url("../../image/rightMiddle/ring_bg.png");
        background-repeat: no-repeat;
        background-size: 130px 130px;
        width: 130px;
        height: 130px;
        > div {
          transform: scale(0.93);
          .percentage-value {
            font-weight: bolder;
            text-shadow: 0 4px 2px #0c1e4f;
            font-family: BebasNeue;
            font-size: 20px;
            color: #f3feff;
            margin-bottom: 10px;
          }
          .percentage-label {
            height: 14px;
            text-shadow: 1px 2px 0 rgb(12 30 79 / 70%);
            font-family: PingFangSC;
            font-size: 14px;
            font-weight: 500;
            line-height: 14px;
            color: #9ef5ff;
          }
        }
      }
    }
  }
}
.el-progress ::v-deep path:first-child {
  stroke: #fff0;
}
#left_progress .el-progress ::v-deep path:last-child {
  stroke: url(#blue);
}
#right_progress .el-progress ::v-deep path:last-child {
  stroke: url(#dismantle);
}
</style>
