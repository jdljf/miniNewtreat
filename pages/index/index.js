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
    flowClassify: app.globalData.flowClassify
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    let that = this
    // this.init()
    // console.log(fly.get("/api/getFlowClassify"))
    fly.get("/api/getFlowClassify").then(res=>{
      let flowClassify = app.globalData.flowClassify
      that.setData({ flowClassify: res.flowClassify })
    })
    fly.get("/api/getClassify").then(res => {
      let classify = app.globalData.classify
      that.setData({ classify: res.classify })
    })

    // console.log(app.globalData)
    // console.log(this.data)
  },
  // async init () {
  //   let that = this
  //   // try {

  //   // }
  //   // catch{

  //   // }
  //   console.log(fly.get("/api/getFlowClassify").PromiseValue)
  //   console.log(fly.get("/api/getFlowClassify").engine)
  //   console.log(fly.get("/api/getFlowClassify").engine.response)
  //   fly.get("/api/getFlowClassify").then(res => {
  //     console.log(res)
  //     let flowClassify = app.globalData.flowClassify
  //     that.setData({ flowClassify: res.flowClassify })
  //   })
  //   // console.log(flowClassify)
  //   // let globalFLowClassify = app.globalData.classify
  //   // this.setData({ globalFLowClassify: res.data.classify })
  // },
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