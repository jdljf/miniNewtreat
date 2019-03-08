// pages/test/test.js
import fly from '../../http/config.js'
const regeneratorRuntime = require('../../lib/runtime')

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    flowClassify: app.globalData.flowClassify,
    classify: app.globalData.classify,
    banner: [],
    subClassifyImgs: [
      "../../assets/renwen_logo.png",
      "../../assets/jisuanji_logo.png",
      "../../assets/xiyi_logo.png",
      "../../assets/zhongyi_logo.png",
      "../../assets/gonggong_logo.png",
      "../../assets/linchuang_logo.png"
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 1000,
    duration: 1800,
    checkedindex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    let that = this
    // this.init()
    // console.log(fly.get("/api/getFlowClassify"))
    fly.get("/api/getFlowClassify").then(res => {
      let flowClassify = app.globalData.flowClassify
      that.setData({
        flowClassify: res.flowClassify
      })
    })
    fly.get("/api/getClassify").then(res => {
      let classify = app.globalData.classify
      that.setData({
        classify: res.classify
      })
    })
    this.getBanner()
    this.getClassifyAct()
  },
  async getBanner() {
    let resData = await fly.get('/api/getBanner')
    let bannerImgs
    resData = resData.banner
    bannerImgs = resData.map((item) => {
      return fly.config.baseURL + '/api' + item
    })
    this.setData({
      'banner': bannerImgs
    })
  },
  async getClassifyAct() {
    let resData = await fly.get("/api/getClassify")
    let classifies
    classifies = resData.classify

    this.setData({
      'classify': classifies
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})