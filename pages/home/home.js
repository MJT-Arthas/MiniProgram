let utils = require('../../utils/utils')
Page({
    data:{
      nowTime: utils.formatDate(new Date, "hh:mm:ss")
    },
    onLoad(){
      setInterval(
        ()=>{
          this.setData({
            nowTime: utils.formatDate(new Date, "hh:mm:ss")
          })
        },1000)
    },
    onShareAppMessage: function () {

    },
    homeClick(){
      wx.switchTab ({
        url: '/pages/selfReport/selfReport',
      })
    }
})