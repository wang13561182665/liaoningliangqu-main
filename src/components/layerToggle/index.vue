<!--
* @创建人: 王怀德
* @具体功能: 切换地图图层组件
-->
<template>
  <div id="layerToggle">
    <div
      :class="
        layerToggleData.type === 'dark'
          ? 'layerToggle_dark'
          : 'layerToggle_undertint'
      "
    >
      <div
        @click="openToggleLayers"
        :class="toggleLayersType ? 'openToggleLayers pointer' : 'pointer'"
      ></div>
      <ul v-show="toggleLayersType">
        <li
          :class="mapType ? 'choiceMapLayer pointer' : 'pointer'"
          @click="mapType = true"
        >
          <div></div>
          行政区
        </li>
        <li
          :class="mapType ? 'pointer' : 'choiceMapLayer pointer'"
          @click="mapType = false"
        >
          <div></div>
          影像
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "layerToggle",
  props: {
    layerToggleData: {
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
    return {
      mapType: true,
      toggleLayersType: false,
    };
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {},
  // 生命vue函数
  methods: {
    openToggleLayers() {
      this.toggleLayersType = !this.toggleLayersType;
    },
  },
};
</script>

<style scoped lang="scss">
#layerToggle {
  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    > div {
      width: 40px;
      height: 42px;
    }
    > ul {
      margin-left: 4px;
      > li {
        width: 72px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        font-family: PingFangSC;
        font-size: 14px;
        > div {
          width: 64px;
          height: 64px;
          margin: 4px 0;
          border-radius: 10px;
        }
      }
      > li:nth-child(2) {
        > div {
          background-image: url("./image/mapIcon.png");
          background-repeat: no-repeat;
          background-size: 64px 64px;
        }
      }
    }
  }
  .layerToggle_dark {
    > ul {
      background-image: url("./image/dark_tabbar_bg.png");
      background-size: 72px 188px;
      background-repeat: no-repeat;
      width: 72px;
      height: 188px;
      .choiceMapLayer {
        > div {
          border: 1px solid #ffe449;
        }
        color: #ffe449;
      }
      > li {
        color: #9ef5ff;
      }
      > li:nth-child(1) {
        > div {
          background-image: url("./image/dark_mapIcon.png");
          background-repeat: no-repeat;
          background-size: 64px 64px;
        }
      }
    }
    > div {
      background-image: url("./image/dark_select.png");
      background-size: 40px 42px;
    }
  }
  .layerToggle_undertint {
    > ul {
      width: 72px;
      height: 188px;
      background-color: #f7f9fc;
      border-radius: 10px;
      .choiceMapLayer {
        > div {
          border: 1px solid #0077ff;
        }
        color: #0077ff;
      }
      > li {
        color: #0c203d;
      }
      > li:nth-child(1) {
        > div {
          background-image: url("./image/dark_mapIcon.png");
          background-repeat: no-repeat;
          background-size: 64px 64px;
        }
      }
    }
    > div {
      background-image: url("./image/undertint_noselect.png");
      background-repeat: no-repeat;
      background-size: 24 24px;
      background-position: 50%;
      background-color: #f7f9fc;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    .openToggleLayers {
      background-image: url("./image/undertint_select.png");
    }
  }
}
</style>
