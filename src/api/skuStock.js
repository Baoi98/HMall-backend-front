import request from '@/utils/request'
export function fetchList(pid,params) {
  return request({
    url:'/product/item/sku/'+pid,
    method:'get',
    params: params
  })
}

export function update(pid,data) {
  return request({
    url:'/product/item/sku/update/'+pid,
    method:'put',
    data : data
  })
}
