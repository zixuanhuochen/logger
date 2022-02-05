import http from './http'

export const toLogin = (data) => http({
  contentType: 'application/x-www-form-urlencoded',
  method: 'post',
  url: '/login',
  data
})
