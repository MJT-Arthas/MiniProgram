// pages/selfReport/selfReport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    us: '',
    ps: '',
    time:'1',
    isdiable:false,
    items: [
      { name: '1', value: '早报' ,checked:'true'},
      { name: '2', value: '晚报', checked: '' },
  ],
    checkboxNmae:'记住账号密码'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  checkboxChange (e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    if(e.detail.value=='remember'){
      console.log('存了')
      wx.setStorageSync('userName', this.data.us);
   wx.setStorageSync('userPassword', this.data.ps);
    }
},
  radioChange(e) {
    this.setData({
      time: e.detail.value
    });
},
  userNameInput(e) {
    this.setData({
      us: e.detail.value
    });
  },
  passwordInput(e) {
    this.setData({
      ps: e.detail.value
    });
  },
  check(e){
    console.log(e)
  },
  report() {
    if(!(this.data.us&&this.data.us)){
      wx.showToast({
        title: '账号密码为空',
        icon: 'loading',
        image: '/assets/images/weather/info.png',
        duration: 1000
      })
      return
    }
    // console.log(this.data.time)
    // this.setData({
    //   disable: false
    // });
    // console.log(this.data.disable)
    wx.showToast({
      title: '填报中',
      icon: 'loading',
      // image: '/assets/images/weather/info.png',
      duration: 10000
    })
    wx.request({
      url: "https://www.mjtweb.xyz/miniReport",
      method: "POST",
      data: {
        us: this.data.us,
        ps: this.data.ps,
        time: this.data.time,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        if (res.data.err == 0) {
          wx.showToast({
            title: '填报成功',
            icon: 'success',
            // image: '/assets/images/weather/info.png',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '填报失败',
            // icon: 'success',
            image: '/assets/images/weather/info.png',
            duration: 2000
          })
        }
        // this.setData({
        //   disable: true
        // });
      }
    })
  },
  onLoad: function (options) {
    // radioChange()
    this.setData({
      us:wx.getStorageSync('userName'),
      ps: wx.getStorageSync('userPassword')
    });


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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来填每日两报啦~',
      path: '/pages/selfReport/selfReport',
      imageUrl:'/assets/images/weather/beach-bird-birds-235787.jpg'
    }
  }
})