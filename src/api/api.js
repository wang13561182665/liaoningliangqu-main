import request from './request';

const get_region = (data) => {
  return request.get_area({
    url: '/region',
    data
  })
};
const get_year_by_code = (data) => {
  return request.get_area({
    url: '/upload/getYearByCode',
    data
  })
};
// const getFunctionalRegionExcel = (data) => {
//   return request.post({
//     url: '/cropDetection/getFunctionalRegionExcel',
//     data
//   })
// }

export default {
  get_region,
  get_year_by_code,
  // getFunctionalRegionExcel,
}