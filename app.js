App({
  globalData: {
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
    city:"",
    key: '02dbd6cf8348495885d500478c08c0c5',
    weatherIconUrl: 'https://cdn.heweather.com/cond_icon/',
    requestUrl: {
      weather: 'https://free-api.heweather.com/s6/weather',
      hourly: 'https://free-api.heweather.com/s6/weather/hourly',
    },

  },
  setGeocoderUrl (address) {
    return `https://api.map.baidu.com/geocoder/v2/?address=${address}&output=json&ak=${this.globalData.ak}`
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