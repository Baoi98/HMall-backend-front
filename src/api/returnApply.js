import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/order/returnApply/list',
    method:'get',
    params:params
  })
}

export function deleteApply(params) {
  return request({
    url:'/order/returnApply/delete',
    method:'delete',
    params:params
  })
}
export function updateApplyStatus(id,data) {
  return request({
    url:'/order/returnApply/update/status/'+id,
    method:'put',
    data:data
  })
}

export function getApplyDetail(id) {
  return request({
    url:'/order/returnApply/'+id,
    method:'get'
  })
}
