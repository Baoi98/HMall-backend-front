import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/product/brand/list',
    method:'get'
  })
}
export function createBrand(data) {
  return request({
    url:'/product/brand/create',
    method:'post',
    data:data
  })
}
export function updateShowStatus(data) {
  return request({
    url:'/product/brand/update/showStatus',
    method:'post',
    data:data
  })
}

export function updateFactoryStatus(data) {
  return request({
    url:'/product/brand/update/factoryStatus',
    method:'post',
    data:data
  })
}

export function deleteBrand(id) {
  return request({
    url:'/product/brand/delete/'+id,
    method:'get',
  })
}

export function getBrand(id) {
  return request({
    url:'/product/brand/'+id,
    method:'get',
  })
}

export function updateBrand(id,data) {
  return request({
    url:'/product/brand/update/'+id,
    method:'post',
    data:data
  })
}

