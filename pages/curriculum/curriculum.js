// pages/test/test.js
import fly from '../../http/config.js'
const regeneratorRuntime = require('../../lib/runtime')

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curriculums: [],
    videos: []
  },
  onLoad: function () {
    this.getUserCurriculum()
    console.log(this.data)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {    
  },
  async getUserCurriculum() {
    let that = this
    try {
      let resData = await fly.get("/api/getUserCurriculum")
      let curriculums = resData.curriculum
      let videos = resData.videos
      that.setData({
        curriculums: curriculums,
        videos: videos
      })
    }
    catch(e){
      
    }    
  },
  videoTitle(index){
    let hasVideo = this.data.video.lenght
    console.log(this.data)
    if (hasVideo > 0) {
      return this.data.videos[index].title
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})