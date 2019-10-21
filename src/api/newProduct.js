import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/backend/admin/home/newProduct/list',
    method:'get',
    params:params
  })
}

export function updateRecommendStatus(data) {
  return request({
    url:'/backend/admin/home/newProduct/update/recommendStatus',
    method:'put',
    data:data
  })
}

export function deleteNewProduct(data) {
  return request({
    url:'/backend/admin/home/newProduct/delete',
    method:'delete',
    data:data
  })
}

export function createNewProduct(data) {
  return request({
    url:'/backend/admin/home/newProduct/create',
    method:'post',
    data:data
  })
}

export function updateNewProductSort(params) {
  return request({
    url:'/backend/admin/home/newProduct/update/sort/'+params.id,
    method:'put',
    params:params
  })
}
