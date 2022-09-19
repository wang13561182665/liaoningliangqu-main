<!--
* @创建人: 王怀德
* @具体功能: 图层选项卡组件
-->
<template>
  <div
    id="layerTabbar"
    :class="
      layerTabbarData.type === 'dark'
        ? 'layerTabbar_dark'
        : 'layerTabbar_undertint'
    "
    class="transition_effect"
    :style="stretchType ? 'height:' + stretchHeight : 'height: 45px;'"
  >
    <ul>
      <li class="title" @click="stretch('all')">
        <div>图层选择{{ stretchHeight }}</div>
        <span></span>
      </li>
      <li
        v-for="item in darkList"
        :key="item.id"
        class="children transition_effect"
        @click="stretch(item)"
        :style="
          item.stretchType
            ? 'height:' + (item.children.length * 30 + 38 + 16) + 'px;'
            : 'height: 38px;'
        "
      >
        <div class="children_title">
          <span></span>
          {{ item.name }}
        </div>
        <dir
          v-for="childrenItem in item.children"
          :key="childrenItem.id"
          class="children_checkbox"
        >
          <div
            :style="`background:${childrenItem.bgColor}50;border:1px solid ${childrenItem.brColor};box-shadow: inset 0 0 0 1px ${childrenItem.bgColor}, inset 0 0 0 2px ${childrenItem.brColor};`"
          ></div>
          {{ childrenItem.name }}
          <el-checkbox v-model="checked1" />
        </dir>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "layerTabbar",
  props: {
    layerTabbarData: {
      type: Object,
      default: () => {
        return {
          type: null,
        };
      },
    },
  },
  // 注册引用的组件
  components: {},
  data() {
    return {
      stretchType: true,
      stretchHeight: "",
      darkList: [
        {
          name: "两区数据",
          id: "1",
          stretchType: true,
          children: [
            {
              name: "两区地块",
              id: "1-1",
              bgColor: "#8fffaa",
              brColor: "rgba(11, 74, 5, 0.7)",
            },
            {
              name: "两区片块",
              id: "1-2",
              bgColor: "#00fbd4",
              brColor: "rgba(10, 69, 38, 0.7)",
            },
          ],
        },
        {
          name: "基本农田",
          id: "2",
          stretchType: true,
          children: [
            {
              name: "两区地块",
              id: "2-1",
              bgColor: "#ecf754",
              brColor: "rgba(84, 89, 10, 0.7)",
            },
            {
              name: "保护区片块",
              id: "2-2",
              bgColor: "#fccc0d",
              brColor: "gba(89, 62, 10, 0.7)",
            },
            {
              name: "保护图斑",
              id: "2-3",
              bgColor: "#fe8f46",
              brColor: "rgba(88, 40, 9, 0.7)",
            },
          ],
        },
        {
          name: "高标准农田",
          id: "3",
          stretchType: true,
          children: [
            {
              name: "两区地块",
              id: "3-1",
              bgColor: "#f04d6e",
              brColor: "rgba(98, 14, 30, 0.7)",
            },
          ],
        },
        {
          name: "农村土地经营权",
          id: "4",
          stretchType: true,
          children: [
            {
              name: "确权数据地块",
              id: "4-1",
              bgColor: "#cb78fc",
              brColor: "rgba(58, 15, 83, 0.7)",
            },
          ],
        },
      ],
      eventType: false,
    };
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {
    this.stretchHeight =
      document.getElementById("layerTabbar").offsetHeight + "px";
  },
  // 生命vue函数
  methods: {
    stretch(item) {
      if (this.eventType) return;
      this.eventType = true;
      if (item === "all") {
        this.stretchType = !this.stretchType;
        if (!this.stretchType)
          this.stretchHeight =
            document.getElementById("layerTabbar").offsetHeight + "px";
      } else {
        item.stretchType = !item.stretchType;
      }
      let setTimeoutName = setTimeout(() => {
        this.eventType = false;
        let layerTabbar = document.getElementById("layerTabbar");
        this.stretchHeight =
          layerTabbar.getElementsByTagName("ul")[0].offsetHeight + "px";
        clearTimeout(setTimeoutName);
      }, 500);
    },
  },
};
</script>

<style scoped lang="scss">
#layerTabbar {
  width: 182px;
}
.layerTabbar_dark {
  background-image: url("./image/dark_bg.png");
  background-repeat: no-repeat;
  background-size: 182px 100%;
  color: #9ef5ff;
  .title {
    height: 45px;
    background-image: url("./image/dark_title_bg.png");
    background-repeat: no-repeat;
    background-size: 182px 45px;
    color: #f3feff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    > div {
      background-image: url("./image/layer_title_bg.png");
      background-repeat: no-repeat;
      background-size: 14px 14px;
      background-position: 16px;
      padding-left: 38px;
      font-family: PingFangSC;
      font-size: 14px;
      font-weight: 500;
    }
    > span {
      background-image: url("./image/dark_layer_title_arrow.png");
      background-repeat: no-repeat;
      background-size: 14px 14px;
      width: 14px;
      height: 14px;
      margin-right: 23px;
    }
  }
  .children {
    .children_title {
      font-family: PingFangSC;
      font-size: 14px;
      font-weight: 500;
      color: #9ef5ff;
      display: flex;
      width: 180px;
      height: 38px;
      background-image: url("./image/dark_title_bg.png");
      background-size: 180px 38px;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 8px;
      span {
        background-image: url("./image/dark_title_arrow.png");
        width: 14px;
        height: 14px;
        background-size: 14px;
        background-repeat: no-repeat;
        margin: 0 8px;
      }
    }
  }
  .children_checkbox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin: 16px 0;
    font-family: PingFangSC;
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    > div {
      width: 14px;
      height: 14px;
      border-radius: 2px;
      margin-left: 16px;
      margin-right: 8px;
    }
    > label {
      flex: 1;
      margin-right: 16px;
      text-align: right;
    }
  }
}
</style>
