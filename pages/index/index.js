// pages/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    count: 0,
    item: "左边",
    mail: '',
    code: null,
    password: null
  },
  onLoad() {},
  userMailInput(e) {
    this.setData({
      mail: e.detail.value
    });
  },
  userPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },
  userCodeInput(e) {
    this.setData({
      code: e.detail.value
    });
  },
  sendMail() {
    wx.request({
      url: "https://www.mjtweb.xyz/node/user/getMailCode",
      method: "POST",
      data: {
        inputMail: this.data.mail,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        wx.showToast({
          title: res.data.msg,
          icon: 'success',
          image: '/assets/images/weather/info.png',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  reg() {
    wx.request({
      url: "https://www.mjtweb.xyz/node/user/reg",
      method: "POST",
      data: {
        us: this.data.mail,
        ps: this.data.password,
        code: this.data.code
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        wx.showToast({
          title: res.data.msg,
          icon: 'success',
          image: '/assets/images/weather/info.png',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
    this.setData({
      mail: '',
      code: null,
      password: null
    });
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
  itemClick(e) {
    this.setData({
      item: e.detail.title
    })
  },
  onShareAppMessage: function () {

  }

})