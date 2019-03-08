// pages/test/test.js
import fly from '../../http/config.js'
const regeneratorRuntime = require('../../lib/runtime')

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: app.globalData.name,
    password: '',
    phoneNumber: '',
    idNumber: '',
    province: '',
    area: '',
    city: '',
    address: '',
    curriculum: 0,
    learnedTime: 0,
    medicalBeans: 0,
  },
  onLoad: function() {
    this.getPersonMessage()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },
  async getPersonMessage() {
    let resData = await fly.get("/api/getPersonMessage", )

    app.globalData.name = resData.name
    app.globalData.phoneNumber = resData.phoneNumber;
    app.globalData.idNumber = resData.idNumber;
    app.globalData.password = resData.password;
    app.globalData.province = resData.province;
    app.globalData.area = resData.area;
    app.globalData.city = resData.city;
    app.globalData.address = resData.address;
    app.globalData.curriculum = resData.curriculum
    app.globalData.learnedTime = resData.learnedTime
    app.globalData.medicalBeans = resData.medicalBeans

    this.setData({
      name: app.globalData.name,
      phoneNumber: app.globalData.phoneNumber,
      idNumber: app.globalData.idNumber,
      curriculum: app.globalData.curriculum,
      learnedTime: app.globalData.learnedTime,
      medicalBeans: app.globalData.medicalBeans
    })
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