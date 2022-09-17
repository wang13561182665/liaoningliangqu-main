import Service from "./config";
import qs from 'qs'
let areaUrl = 'http://223.71.70.150:8183/area';
const get_area = (config) => {
  config.url = areaUrl + config.url;
  return Service({
    ...config,
    method: 'get',
    params: config.data
  })
};
// 封装post请求
const post = (config) => {
  return Service({
    ...config,
    method: 'post',
    params: qs.stringify(config.data)
  })
};
export default {
  get_area,
  post,
};