import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

//品牌request
export function fetchBrandList(params){
  return request({
      url:'/vue-admin-template/table/brand/list',
      method:'get',
      params,
  })
}
export function createBrand(params){
  return request({
    url:'/vue-admin-template/table/brand/create',
    method:'post',
    params,
  })
}
export function updateBrand(params){
  return request({
    url:'/vue-admin-template/table/brand/update',
    method:'post',
    params,
  })
}
export function deleteBrand(params){
  return request({
    url:'/vue-admin-template/table/brand/delete',
    method:'post',
    params,
  })
}
//车系request
export function fetchSeriesList(params){
  return request({
      url:'/vue-admin-template/table/series/list',
      method:'get',
      params,
  })
}
export function createSeries(params){
  return request({
      url:'/vue-admin-template/table/series/create',
      method:'post',
      params,
  })
}
export function updateSeries(params){
  return request({
      url:'/vue-admin-template/table/series/update',
      method:'post',
      params,
  })
}
export function deleteSeries(params){
  return request({
    url:'/vue-admin-template/table/series/delete',
    method:'post',
    params,
  })
}

//车型request
export function fetchCarTypeList(params){
  return request({
      url:'/vue-admin-template/table/cartype/list',
      method:'get',
      params,
  })
}
export function createCarType(params){
  return request({
      url:'/vue-admin-template/table/cartype/create',
      method:'post',
      params,
  })
}
export function updateCarType(params){
  return request({
      url:'/vue-admin-template/table/cartype/update',
      method:'post',
      params,
  })
}
export function deleteCarType(params){
  return request({
    url:'/vue-admin-template/table/cartype/delete',
    method:'post',
    params,
  })
}
//试驾request
export function fetchTestDriveList(params){
  return request({
    url:'/vue-admin-template/table/testdrive/list',
    method:'get',
    params,
  })
}

export function updateTestDrive(params){
  return request({
    url:'/vue-admin-template/table/testdrive/update',
    method:'post',
    params,
  })
}