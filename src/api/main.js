import request from '@/utils/request'

export function statistical() {
  return request({
    url: '/backend/admin/main/statistical',
    method: 'get'
  })
}

export function getChart(start,end) {
  return request({
    url: '/backend/admin/main/getChart/' + start + '/' + end,
    method: 'get'
  })
}

