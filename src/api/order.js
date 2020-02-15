import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/order/order/list',
    method:'get',
    params:params
  })
}
//批量关闭订单
export function closeOrder(params) {
  return request({
    url:'/order/order/update/close',
    method:'put',
    params:params
  })
}
//批量删除订单
export function deleteOrder(params) {
  return request({
    url:'/order/order/delete',
    method:'delete',
    params:params
  })
}
//订单批量发货
export function deliveryOrder(data) {
  return request({
    url:'/order/order/update/delivery',
    method:'put',
    data:data
  });
}
//订单详情
export function getOrderDetail(id) {
  return request({
    url:'/order/order/'+id,
    method:'get'
  });
}
//修改订单收货地址
export function updateReceiverInfo(data) {
  return request({
    url:'/order/order/update/receiverInfo',
    method:'put',
    data:data
  });
}
//修改订单费用
export function updateMoneyInfo(data) {
  return request({
    url:'/order/order/update/moneyInfo',
    method:'put',
    data:data
  });
}
//订单详情页更新备注
export function updateOrderNote(params) {
  return request({
    url:'/order/order/update/note',
    method:'put',
    params:params
  })
}
//订单追踪
export function orderTracking(params) {
  return request({
    url:'/order/order/orderTracking',
    method:'get',
    params:params
  })
}
