<!--
* @创建人: 王怀德
* @具体功能: 辽宁“两区”监测一张图-左边中部组件：xxx两区分布概况
-->
<template>
  <div class="leftBottom">
    <chartTitle>两区数据情况</chartTitle>
    <div class="content">
      <div ref="echartsMain"></div>
    </div>
  </div>
</template>
<script>
// 图表组件的标题
import chartTitle from "@/components/chartTitle/index.vue";
export default {
  name: "leftBottom",
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
  mounted() {
    this.init();
  },
  // 生命vue函数
  methods: {
    init() {
      var app = {};

      var chartDom = this.$refs.echartsMain;
      var myChart = this.$echarts.init(chartDom);
      var option;

      const posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight",
      ];
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90,
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right",
          },
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom",
          },
        },
        position: {
          options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
          }, {}),
        },
        distance: {
          min: 0,
          max: 100,
        },
      };
      app.config = {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        onChange: function () {
          const labelOption = {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance,
          };
          myChart.setOption({
            series: [
              {
                label: labelOption,
              },
              {
                label: labelOption,
              },
              {
                label: labelOption,
              },
              {
                label: labelOption,
              },
            ],
          });
        },
      };
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {},
        },
      };
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["Forest", "Steppe", "Desert", "Wetland"],
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar", "stack"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["2012", "2013", "2014", "2015", "2016"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Forest",
            type: "bar",
            barGap: 0,
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390],
          },
          {
            name: "Steppe",
            type: "bar",
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290],
          },
          {
            name: "Desert",
            type: "bar",
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190],
          },
          {
            name: "Wetland",
            type: "bar",
            label: labelOption,
            emphasis: {
              focus: "series",
            },
            data: [98, 77, 101, 99, 40],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped lang="scss">
.leftBottom {
  width: 928px;
  color: #f3feff;
  .content {
    height: 256px;
    margin-bottom: 16px;
    background-image: url("../../image/leftBottom/echarts_928x256bg.png");
    background-repeat: no-repeat;
    background-size: 928px 256px;
    > div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
