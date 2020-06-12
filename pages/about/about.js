// pages/about/about.js
var util = require('../../util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTime: new Date().pattern("hh:mm:ss"),
    startCompus: ["宝山校区", "嘉定南门", "延长北门"],
    startIndex: 0,
    endCompus: ["宝山校区", "嘉定南门", "延长北门"],
    endIndex: 1,
    timeTable: []
  },
  bindStartCompusChange: function (e) {
    this.setData({
      startIndex: e.detail.value
    })
    this.show();
  },
  bindEndCompusChange: function (e) {
    this.setData({
      endIndex: e.detail.value
    })
    this.show();
  },
  show: function () {
    if (this.data.startIndex == 0 && this.data.endIndex == 1) {
      console.log("宝山到嘉定")
      this.setData({
        timeTable: ["07:00", "08:00", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "17:00", "18:00", "21:00"]
      })
    } else if (this.data.startIndex == 0 && this.data.endIndex == 2) {
      console.log("宝山到延长")
      this.setData({
        timeTable: ["07:00", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "17:00", "18:00", "21:40"]
      })
    } else if (this.data.startIndex == 1 && this.data.endIndex == 0) {
      console.log("嘉定到宝山")
      this.setData({
        timeTable: ["07:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00", "21:00"]
      })
    } else if (this.data.startIndex == 1 && this.data.endIndex == 2) {
      console.log("嘉定到延长")
      this.setData({
        timeTable: ["07:00", "09:00*", "10:00*", "11:00*", "12:00*", "13:00*", "14:00*", "15:00*", "17:00", "18:00", "21:00*"]
      })
    } else if (this.data.startIndex == 2 && this.data.endIndex == 0) {
      console.log("延长到宝山")
      this.setData({
        timeTable: ["07:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "17:00"]
      })
    } else if (this.data.startIndex == 2 && this.data.endIndex == 1) {
      console.log("延长到嘉定")
      this.setData({
        timeTable: ["07:00", "09:00*", "10:00*", "11:00*", "12:00*", "13:00*", "14:00*", "15:00*", "17:00", "21:00*"]
      })
    } else {
      this.setData({
        timeTable: []
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(
      () => {
        this.setData({
          nowTime: new Date().pattern("hh:mm:ss")
        })
      }, 1000)
      this.show();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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