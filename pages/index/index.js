// pages/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    count: 0,
    item:""
  },
  onLoad() {
    wx.request({
      url: 'https://www.mjtweb.xyz/Python',
      complete: (res) => {
        console.log(res)
      },
      fail: (res) => {},
      // method: GET,
      success: (result) => {},
    })
  },
  plus() {
    this.setData({
      count: this.data.count + 1
    })
  },
  minus() {
    this.setData({
      count: this.data.count - 1
    })
  },
  itemClick(e){
    console.log(e.detail.title)
    this.setData({
      item:e.detail.title
    })
  },
  onShareAppMessage: function () {

  }

})