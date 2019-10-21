import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/backend/admin/home/advertise/list',
    method:'get',
    params:params
  })
}
export function updateStatus(id,params) {
  return request({
    url:'/backend/admin/home/advertise/update/status/'+id,
    method:'put',
    params:params
  })
}
export function deleteHomeAdvertise(data) {
  return request({
    url:'/backend/admin/home/advertise/delete',
    method:'delete',
    data:data
  })
}
export function createHomeAdvertise(data) {
  return request({
    url:'/backend/admin/home/advertise/create',
    method:'post',
    data:data
  })
}
export function getHomeAdvertise(id) {
  return request({
    url:'/backend/admin/home/advertise/'+id,
    method:'get',
  })
}

export function updateHomeAdvertise(id,data) {
  return request({
    url:'/backend/admin/home/advertise/update/'+id,
    method:'put',
    data:data
  })
}
