import request from '@/utils/request'
export function fetchList(param) {
  return request({
    url:'/product/item/brand/list',
    method:'get',
    params:param
  })
}
export function createBrand(brand) {
  return request({
    url:'/product/item/brand/create',
    method:'post',
    data:brand
  })
}
//修改品牌显示状态
export function updateShowStatus(param) {
  return request({
    url:'/product/item/brand/update/showStatus',
    method:'put',
    params:param
  })
}

export function updateFactoryStatus(param) {
  return request({
    url:'/product/item/brand/update/factoryStatus',
    method:'put',
    params:param
  })
}
//删除品牌
export function deleteBrand(data) {
  return request({
    url:'/product/item/brand/delete',
    method:'delete',
    data:data
  })
}

export function getBrand(id) {
  return request({
    url:'/product/item/brand/'+id,
    method:'get',
  })
}
//更新品牌
export function updateBrand(id,data) {
  return request({
    url:'/product/item/brand/update/'+id,
    method:'put',
    data:data
  })
}

//品牌相关商品
export function brandAboutItem(param) {
  return request({
    url:'/product/item/brand/aboutList',
    method:'get',
    params:param
  })
}
