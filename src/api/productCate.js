import request from '@/utils/request'
export function fetchList(parentId,params) {
  return request({
    url:'/product/item/category/list/' + parentId,
    method:'get',
    params : params
  })
}
export function deleteProductCate(id) {
  return request({
    url:'/product/item/category/delete/'+id,
    method:'delete'
  })
}

export function createProductCate(data) {
  return request({
    url:'/product/item/category/create',
    method:'post',
    data:data
  })
}
//更新商品分类
export function updateProductCate(id,data) {
  return request({
    url:'/product/item/category/update/'+id,
    method:'put',
    data:data
  })
}
//获取商品分类
export function getProductCate(id) {
  return request({
    url:'/product/item/category/' + id,
    method:'get',
  })
}
//更新分类显示状态
export function updateShowStatus(ids,showStatus) {
  return request({
    url:'/product/item/category/update/showStatus/' + ids + '/' + showStatus,
    method:'put'
  })
}
//更新分类导航栏显示状态
export function updateNavStatus(ids,navStatus) {
  return request({
    url:'/product/item/category/update/navStatus/' + ids + '/' + navStatus,
    method:'put'
  })
}

export function fetchListWithChildren() {
  return request({
    url:'/product/item/category/list',
    method:'get'
  })
}
