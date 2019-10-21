import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/backend/admin/home/brand/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/backend/admin/home/brand/update/recommendStatus',
    method:'put',
    data:data
  })
}

export function deleteHomeBrand(data) {
  return request({
    url:'/backend/admin/home/brand/delete',
    method:'delete',
    data:data
  })
}

export function createHomeBrand(data) {
  return request({
    url:'/backend/admin/home/brand/create',
    method:'post',
    data:data
  })
}

export function updateHomeBrandSort(params) {
  return request({
    url:'/backend/admin/home/brand/update/sort/'+params.id,
    method:'put',
    params:params
  })
}
