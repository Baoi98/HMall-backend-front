import request from '@/utils/request'
export function fetchList(cid,param) {
  let type = param.type
  let pageNum = param.pageNum
  let pageSize = param.pageSize
  return request({
    url:'/product/item/attribute/list/' + cid + '/' + type + '/' + pageNum + '/' + pageSize,
    method:'get'
  })
}

export function deleteProductAttr(data) {
  return request({
    url:'/product/item/attribute/delete',
    method:'delete',
    data:data
  })
}

export function createProductAttr(data) {
  return request({
    url:'/product/item/attribute/create',
    method:'post',
    data:data
  })
}

export function updateProductAttr(id,data) {
  return request({
    url:'/product/item/attribute/update/' + id,
    method:'put',
    data:data
  })
}
//查询商品属性
export function getProductAttr(id) {
  return request({
    url:'/product/item/attribute/'+id,
    method:'get'
  })
}

export function getProductAttrInfo(productCategoryId) {
  return request({
    url:'/product/item/attribute/attrInfo/' + productCategoryId,
    method:'get'
  })
}
