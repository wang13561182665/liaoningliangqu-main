<!--
* @创建人: 王怀德
* @具体功能: 地区和日期选择组件
-->
<template>
  <div id="regionAndDate">
    <div
      id="largeScreen_regionAndDate"
      :class="regionAndDateData.type === 'dark' ? 'regionAndDate_dark' : 'regionAndDate_undertint'"
    >
      <el-cascader
        v-model="region.selectCode"
        placeholder="请选择您要查看的行政区"
        :options="region.list"
        :props="regionProps"
        filterable
        ref="largeScreen_region"
        :separator="''"
        :popper-class="
          regionAndDateData.type === 'dark' ? 'largeScreen_region' : ''
        "
        @change="regionChange"
      />
      <el-select
        v-model="selectValue"
        :popper-class="
          regionAndDateData.type === 'dark' ? 'largeScreen_date' : ''
        "
        @change="dateChange"
      >
        <el-option
          v-for="item in select"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "regionAndDate",
  props: {
    regionAndDateData: {
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
      regionProps: {
        value: "code",
        label: "name",
        children: "subset",
        checkStrictly: true,
      },
      select: [
        2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
        2010,
      ],
      selectValue: 2021,
    };
  },
  computed: {
    ...mapState({
      date: (state) => state.regionAndDate.date,
      region: (state) => state.regionAndDate.region,
    }),
  },
  // 实例创建完成后的生命周期回调
  created() {},
  // 实例挂载完成后的生命周期回调
  mounted() {},
  // 生命vue函数
  methods: {
    // 地区选择框发生改变
    regionChange() {
      let regionData = this.$refs.largeScreen_region.getCheckedNodes();
      this.getYearByCode(regionData[0]);
    },
    // 时间选择框发生改变
    dateChange(value) {
      this.giveDateSelectDate(value);
    },
    ...mapMutations({
      giveDateSelectDate: "regionAndDate/giveDateSelectDate",
    }),
    ...mapActions({
      getRegion: "regionAndDate/getRegion",
      getYearByCode: "regionAndDate/getYearByCode",
    }),
  },
};
</script>

<style lang="scss">
.regionAndDate_dark {
  > .el-cascader {
    background-color: #0000 !important;
    background-image: url("./image/region_bg.png");
    background-repeat: no-repeat;
    background-size: 194px 42px;
    > .el-input {
      background-color: #0000 !important;
      > .el-input__inner {
        background-color: #0000 !important;
        border: 0;
        color: #f3feff;
        font-size: 14px;
      }
      .el-input__icon {
        color: #9ef5ff;
        font-weight: bolder;
      }
    }
  }
  > .el-select {
    background-color: #0000 !important;
    background-image: url("./image/region_bg.png");
    background-repeat: no-repeat;
    background-size: 103px 42px;
    > .select-trigger {
      background-color: #0000 !important;
      > .el-input {
        background-color: #0000 !important;
        > .el-input__inner {
          background-color: #0000 !important;
          border: 0;
          color: #f3feff;
          font-size: 14px;
        }
        .el-input__icon {
          color: #9ef5ff;
          font-weight: bolder;
        }
      }
    }
  }
}
#largeScreen_regionAndDate {
  > .el-cascader {
    width: 194px;
    height: 42px;
  }
  > .el-select {
    margin-left: 12px;
    width: 103px;
    height: 42px;
  }
}
.largeScreen_region {
  background: #0009 !important;
  border-color: #9ef5ff30 !important;
  .el-cascader-node__label {
    color: #f3feff;
  }
  .el-cascader-node.in-active-path,
  .el-cascader-node.is-active,
  .el-cascader-node.is-selectable.in-checked-path,
  .in-checked-path .el-cascader-node__label {
    color: #9ef5ff;
  }
  .el-radio__input.is-checked .el-radio__inner {
    background: #9ef5ff;
  }
  .el-cascader-menu {
    border-color: #9ef5ff30;
  }
  .el-cascader-node:not(.is-disabled):focus,
  .el-cascader-node:not(.is-disabled):hover {
    background: #9ef5ff30;
  }
}
.largeScreen_date {
  background: #0005 !important;
  border-color: #9ef5ff30 !important;
  .el-select-dropdown__item {
    color: #f3feff;
  }
  .el-select-dropdown__item.selected,
  .largeScreen_date .el-select-dropdown__item.hover,
  .largeScreen_date .el-select-dropdown__item:hover {
    color: #9ef5ff;
  }
  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover,
  .largeScreen_date .el-select-dropdown__item.selected,
  .largeScreen_date .largeScreen_date .el-select-dropdown__item.hover,
  .largeScreen_date .largeScreen_date .el-select-dropdown__item:hover {
    background: #9ef5ff30;
  }
}
</style>
