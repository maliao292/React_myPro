import axios from 'axios';
// 增加默认的请求的 url;
axios.defaults.timeout = 150000;
axios.defaults.baseURL = '/reactYh/yhapi';
axios.defaults.withCredentials = true // 允许携带cookie

// http请求拦截器
axios.interceptors.request.use(config => {
  if (!!localStorage.getItem('yhIdentity')) {
    config.headers.token = localStorage.getItem('yhIdentity');

  }
  return config
}, error => {
  return Promise.reject(error)
})


// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
  if (data.config.url === "/login") {
    return data
  }
  return data.data
}, err => {
  if (err.response.status === 401) {
    window.location.href = '/login'
    localStorage.removeItem('yhIdentity')
    localStorage.removeItem('yhUserName')
  }
  return 'err'
})

export default axios
