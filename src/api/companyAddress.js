import request from '@/utils/request'
export function fetchList() {
  return request({
    url:'/order/companyAddress/list',
    method:'get'
  })
}
