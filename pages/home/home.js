Page({
    data:{
      nowTime:new Date().toLocaleTimeString()
    },
    onLoad(){
      setInterval(
        ()=>{
          this.setData({
            nowTime:new Date().toLocaleTimeString()
          })
        },1000)
    },
    onShareAppMessage: function () {

    },
    homeClick(){
      wx.switchTab ({
        url: '/pages/index/index',
      })
    }
})