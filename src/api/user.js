import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    account: userName,
    pwd: password
  }
  return axios.request({
    url: '/tologin',
    data,
    method: 'get'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
