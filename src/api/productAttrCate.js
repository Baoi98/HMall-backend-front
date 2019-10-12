import request from '@/utils/request'
export function fetchList(param) {
  let pageSize = param.pageSize;
  let pageNum = param.pageNum;
  return request({
    url:'/product/item/attribute/category/list/' + pageNum + '/' + pageSize,
    method:'get'
  })
}

export function createProductAttrCate(name) {
  return request({
    url:'/product/item/attribute/category/create/' + name,
    method:'post'
  })
}

export function deleteProductAttrCate(id) {
  return request({
    url:'/product/item/attribute/category/delete/' + id,
    method:'delete'
  })
}

export function updateProductAttrCate(id,name) {
  return request({
    url:'/product/item/attribute/category/update/' + id + '/' + name,
    method:'put'
  })
}
export function fetchListWithAttr() {
  return request({
    url:'/product/item/attribute/category/list/withAttr',
    method:'get'
  })
}
