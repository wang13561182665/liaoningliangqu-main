import axios from "axios";

// let url = '';
const Service = axios.create({
  // 设置地址
  baseURL:'',
  // 请求头
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  time: 6000
})
// 请求拦截器
Service.interceptors.request.use(config => {
  // 配置请求头
  // config.headers.common['Authorization'] = window.sessionStorage.getItem('token') === null ? null : window.sessionStorage.getItem('token');
  return config
})
// 响应拦截器
Service.interceptors.response.use(response => {
  // 获取接口返回结果
  const res = response.data;
  if (res.code === 200) {
    return res
  } else {
    console.log('数据返回错误', res);
    return res;
  }
})

export default Service;