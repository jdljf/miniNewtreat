var Fly = require("../lib/wx.js") //wx.js为您下载的源码文件
var fly = new Fly();
const app = getApp()

//配置请求基地址
// //定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
// //设置超时
fly.config.timeout = 10000;
// //设置请求基地址
fly.config.baseURL = "http://39.108.213.18:8080"

fly.interceptors.request.use(
  config => {
    if (app.globalData.token) {
      // config.headers.common['Authentication-Token'] = app.globalData.token      
    }

    config.headers['Authentication-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi5buW5bO76ZSLIiwiaWQiOiI1YzMwOWRiNjEyZjIzYzFhOTg5NjdjZTgiLCJpZE51bWJlciI6IjQ0NTMyMjE5OTUxMjE5MDAxNSIsImlhdCI6MTU1MjAzMDYzNiwiZXhwIjoxNTUyNjM1NDM2fQ.SRcYaWQkDdj5GDKe2LiGGfxgoStntyL_MM9t2hVdURA'

    wx.showLoading({
      title: '加载中',
      mask: true
    })
    //   if (store.state.token) {
    //     config.headers.common['Authentication-Token'] = store.state.token
    //     request.headers["X-Tag"] = "flyio";
    //   }
    return config
  }, err => {
    return Promise.reject(err);
  })

fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    //只将请求结果的data字段返回
    return response.data
  },
  // 默认除了2xx之外都是错误的，就会走到这
  error => {
    wx.hideLoading()
    if (error.response) {
      console.log(error.response)
      // switch (error.response.status) {
      //   case 401:
      //     store.dispatch('UserLogout')  // 可能是token过期，清除它
      //     router.replace({
      //       path: '/login',
      //       query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
      //     })
      // }
    }
    return Promise.reject(error)
  })

export default fly