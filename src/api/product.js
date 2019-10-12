import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/product/item/list',
    method:'get',
    params:params
  })
}

export function fetchSimpleList(params) {
  return request({
    url:'/product/item/simpleList',
    method:'get',
    params:params
  })
}

export function updateDeleteStatus(params) {
  return request({
    url:'/product/item/update/deleteStatus',
    method:'put',
    params:params
  })
}
//更新新品状态
export function updateNewStatus(params) {
  return request({
    url:'/product/item/update/newStatus',
    method:'put',
    params:params
  })
}
//更新推荐状态
export function updateRecommendStatus(params) {
  return request({
    url:'/product/item/update/recommendStatus',
    method:'put',
    params:params
  })
}
//更新上下架状态
export function updatePublishStatus(params) {
  return request({
    url:'/product/item/update/publishStatus',
    method:'put',
    params:params
  })
}

export function createProduct(data) {
  return request({
    url:'/product/item/create',
    method:'post',
    data:data
  })
}

export function updateProduct(id,data) {
  return request({
    url:'/product/item/update/'+id,
    method:'post',
    data: data
  })
}

export function getProduct(id) {
  return request({
    url:'/product/item/updateInfo/'+id,
    method:'get',
  })
}

