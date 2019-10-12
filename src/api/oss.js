import request from '@/utils/request'
export function policy(file) {
  let param = new FormData()
  param.append("multipartFile",file)
  return request({
    url:'/product/item/photo/upload',
    method:'post',
    headers: {'Content-Type':'multipart/form-data'},
    data:param
  })
}
