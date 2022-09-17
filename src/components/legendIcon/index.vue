<!--
* @创建人: 王怀德
* @具体功能: 有地图下的图例图表组件
-->
<template>
  <div id="legendIcon">
    <ul :class="legendIconData.type === 'dark' ? 'legendIcon_dark' : 'legendIcon_undertint'">
      <li v-for="item in legendIconData.list" :key="item.name">
        <div :style="'background-color:' + item.color + ';'"></div>
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "legendIcon",
  props: {
    legendIconData: {
      type: Object,
      default: () => {
        return {
          type: null,
          list: [],
        };
      },
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
#legendIcon {
  width: 80px;
  height: 110px;
  .legendIcon_dark {
    background-image: url("./image/legendIcon_dark_bg.png");
    background-size: 80px 110px;
    width: 80px;
    height: 110px;
    li {
      color: #0ee5ff;
    }
  }
  .legendIcon_undertint {
    width: 80px;
    height: 98px;
    border-radius: 8px;
    background-color: #f7f9fc;
    li {
      color: rgba(15, 41, 61, 0.65);
    }
  }
  > ul {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    > li {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      font-family: PingFangSC;
      font-size: 14px;
      > div {
        width: 12px;
        height: 12px;
        margin: 0 8px 0 16px;
      }
    }
  }
}
</style>
