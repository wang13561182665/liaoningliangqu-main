import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './views/common/scss/common.scss'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import common from "./views/common/js/common"
import * as echarts from 'echarts';
const app = createApp(App)
app.config.globalProperties.$common = common
app.config.globalProperties.$echarts = echarts
app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
