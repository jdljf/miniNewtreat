// pages/test/test.js
import fly from '../../http/config.js'
const regeneratorRuntime = require('../../lib/runtime')

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    headline: []
  },
  onLoad: function() {
    this.getHeadlineVideo()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},
  async getHeadlineVideo() {
    try {
      let resData = await fly.get("/api/getHeadlineVideo")
      let headline = resData.headline
      headline.map(item => {
        item.img = fly.config.baseURL + '/api' + item.img
        return item
      })
      console.log(headline)
      this.setData({
        headline: headline
      })
    } catch (e) {
      // wx.navigateTo({
      //   url: '../404/404',
      // })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getHeadlineVideo()
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