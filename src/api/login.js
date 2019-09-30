import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/backend/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(username) {
  return request({
    url: '/backend/admin/info?username=' + username,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/backend/admin/logout',
    method: 'post'
  })
}
