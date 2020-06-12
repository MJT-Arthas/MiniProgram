App({
  globalData: {
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight']
  },
  onLaunch(){
    wx.getSystemInfo({
      success: e => {
      this.globalData.StatusBar = e.statusBarHeight;
      this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
      }
      });
      
  }
})