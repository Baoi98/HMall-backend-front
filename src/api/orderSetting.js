import request from '@/utils/request'
export function getOrderSetting(id) {
  return request({
    url:'/order/orderSetting/'+id,
    method:'get',
  })
}

export function updateOrderSetting(id,data) {
  return request({
    url:'/order/orderSetting/update/'+id,
    method:'put',
    data:data
  })
}
