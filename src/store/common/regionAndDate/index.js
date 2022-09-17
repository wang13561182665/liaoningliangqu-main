
import api from "@/api/api";

const state = {
  // 行政区数据
  region: {
    selectCode: null,
    selectNmae: null,
    list: []
  },
  date: [

  ]
}
const mutations = {
  // 行政区赋值
  giveRegion(state, data) {
    let level = 1;
    let code = '210100';
    let region = {
      selectCode: null,
      selectNmae: null,
      list: []
    };
    let handle = (subset) => {
      subset.forEach((subsets) => {
        if (subsets.level === level) {
          if (subsets.code === code) {
            region = {
              selectCode: subsets.code,
              selectNmae: subsets.name,
              list: [subsets]
            };
          }
        } else {
          if (subsets.subset && subsets.subset.length > 0) {
            handle(subsets.subset)
          }
        }
      })
    };
    if (level === 1 && region.list.length <= 0) {
      region = {
        selectCode: data[0].code,
        selectNmae: data[0].name,
        list: data
      };
    } else {
      handle(data);
    }
    this.dispatch('regionAndDate/getYearByCode', { value: region.selectCode, label: region.selectNmae });
    state.region = region;
  },
  // 时间赋值
  giveDate(state, data) {
    state.region.selectCode = data.regionData.value;
    state.region.selectNmae = data.regionData.label;
    let date = {
      list: data.res,
      selectDate: 2021,
    }
    state.date = date;
  },
  giveDateSelectDate(state, data) {
    state.date.selectDate = data;
  },
  catch(state, data) {
    console.log(data.news, data.err)
  },
}
const actions = {
  // 请求行政区
  getRegion(context) {
    api.get_region().then((res) => {
      context.commit('giveRegion', res.data)
    }).catch((err) => {
      context.commit({ news: 'regionAndDate仓库中的getRegion接口请求错误', err })
    });
  },
  // 请求日期
  getYearByCode(context, regionData) {
    api.get_year_by_code({ code: regionData.value }).then((res) => {
      context.commit('giveDate', { res: res.data, regionData })
    }).catch((err) => {
      context.commit({ news: 'regionAndDate仓库中的giveDate接口请求错误', err })
    });
  }
}
const getters = {
}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}