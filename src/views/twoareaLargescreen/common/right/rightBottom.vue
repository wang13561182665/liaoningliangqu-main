<!--
* @创建人: 王怀德
* @具体功能: 辽宁“两区”监测一张图-右边底部组件：xxx两区种植情况
-->
<template>
  <div class="rightBottom">
    <chartTitle>{{ region.selectNmae }}两区种植情况</chartTitle>
    <div class="content">
      <div ref="echartsMain"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import chartTitle from "@/components/chartTitle/index.vue";
export default {
  name: "rightBottom",
  // 注册引用的组件
  components: {
    chartTitle,
  },
  data() {
    return {
      option: {
        company: "万亩",
        color: ["#00ddff", "#ffe449", "#ae61ff"],
        legendData: ["小麦", "水稻", "大豆"],
        xAxisData: [],
        series: [
          {
            name: "小麦",
            data: [],
          },
          {
            name: "水稻",
            data: [],
          },
          {
            name: "大豆",
            data: [],
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      region: (state) => state.regionAndDate.region,
    }),
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {
    for (let i = 0; i < 20; i++) {
      this.option.xAxisData.push(`x${i}镇`);
      this.option.series[0].data.push(Math.floor(Math.random() * 10000));
      this.option.series[1].data.push(Math.floor(Math.random() * 10000));
      this.option.series[2].data.push(Math.floor(Math.random() * 10000));
    }
    this.init();
  },
  // 生命vue函数
  methods: {
    loadEcharts(myChart, series) {
      let option;
      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: (params) => {
            let htmlStr = `${params[0].axisValue}`;
            params.forEach((item, index) => {
              if (item.componentSubType === "pictorialBar") {
                htmlStr += `
                <div>
                  <div style="background:${
                    item.color
                  };width:12px;height:12px;display:inline-block;margin-right:5px;"></div>
                  ${item.seriesName}：${params[index - 1].value} ${
                  this.option.company
                }
                </div>`;
              }
            });
            return htmlStr;
          },
        },
        color: this.option.color,
        grid: {
          top: 55,
          bottom: 30,
          left: 50,
          right: 16,
        },
        legend: {
          data: this.option.legendData,
          textStyle: {
            color: "#1ea3f6",
            fontSize: 14,
          },
          itemWidth: 12,
          itemHeight: 12,
          right: 0,
          top: 16,
        },
        xAxis: [
          {
            type: "category",
            data: this.option.xAxisData,
            // 坐标刻度配置
            axisLine: {
              lineStyle: {
                color: "#1ea3f6",
                fontSize: 14,
              },
              show: true,
            },
            axisTick: { show: false },
          },
        ],
        yAxis: [
          {
            type: "value",
            // 坐标刻度配置
            axisLine: {
              lineStyle: {
                color: "#1ea3f6",
                fontSize: 14,
              },
            },
            axisTick: { show: false },
            // 坐标刻度单位配置
            name: `单位：${this.option.company}`,
            nameTextStyle: {
              color: "#1ea3f6",
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: series,
      };
      option && myChart.setOption(option);
    },
    handleEchartsData(myChart, legendselectchanged) {
      let series = [];
      this.option.series.forEach((item, index) => {
        let barObj = {
          name: item.name,
          type: "bar",
          stack: "Ad",
          barWidth: 16,
          barMaxWidth: 16,
          barMinWidth: 16,
          emphasis: {
            focus: "series",
          },
          data: item.data,
          itemStyle: {
            // 只会改变柱状的颜色，不用改变legend的颜色
            normal: {
              color: () => {
                return new this.$echarts.graphic.LinearGradient(1, 0, 0, 1, [
                  {
                    offset: 1,
                    color: `${this.option.color[index]}00`, // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: this.option.color[index], // 100% 处的颜色
                  },
                ]);
              },
            },
          },
        };
        let pictorialBarData = [];
        for (let i = 0; i <= index; i++) {
          let condition = true;
          if (legendselectchanged) {
            for (const key in legendselectchanged.selected) {
              if (this.option.series[i].name === key) {
                condition = legendselectchanged.selected[key];
              }
            }
          }
          if (condition) {
            if (pictorialBarData.length > 0) {
              this.option.series[i].data.forEach((seriesItem, seriesIndex) => {
                pictorialBarData[seriesIndex] += seriesItem;
              });
            } else {
              pictorialBarData = JSON.parse(
                JSON.stringify(this.option.series[i].data)
              );
            }
          }
        }
        let pictorialBar = {
          name: item.name,
          type: "pictorialBar",
          stack: "Ad",
          symbol: "rect",
          symbolSize: [16, 2],
          symbolOffset: [0, -5],
          zlevel: 2,
          barMinWidth: 16,
          itemStyle: {
            normal: {
              color: this.option.color[index],
              shadowBlur: 5,
              shadowOffsetY: 2,
              shadowColor: this.option.color[index],
            },
          },
          symbolPosition: "end",
          data: pictorialBarData,
        };
        series.push(barObj, pictorialBar);
      });
      this.loadEcharts(myChart, series);
    },
    init() {
      const chartDom = this.$refs.echartsMain;
      const myChart = this.$echarts.init(chartDom);
      this.handleEchartsData(myChart);
      myChart.on("legendselectchanged", (e) => {
        this.handleEchartsData(myChart, e);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.rightBottom {
  width: 928px;
  color: #f3feff;
  position: absolute;
  z-index: 9;
  right: 24px;
  top: 680px;
  > .content {
    height: 256px;
    margin-bottom: 16px;
    background-image: url("../../image/common/echarts_928x256bg.png");
    background-repeat: no-repeat;
    background-size: 928px 256px;
    > div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
