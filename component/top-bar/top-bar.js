var app = getApp();
Component({
  properties:{
    title:String
  },
  externalClasses:[
    'titleclass'
  ],
  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight
  }
})