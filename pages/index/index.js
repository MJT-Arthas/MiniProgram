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
        mail: '乐桥',
        code: null,
        password: null,
        current_station_data: []
    },
    onLoad() {
        wx.request({
            url: `https://szgj.2500.tv/api/v1/search/schedule?current_station=${this.data.mail}`,
            method: "get",

            header: {

            },
            success: (res) => {

                console.log(res.data.data);
                this.setData({
                    current_station_data: res.data.data
                })
            },
            fail: function (res) {
                console.log(res)
            }
        })
    },
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
            url: `https://szgj.2500.tv/api/v1/search/schedule?current_station=${this.data.mail}`,
            method: "get",

            header: {

            },
            success: (res) => {

                console.log(res.data.data);
                this.setData({
                    current_station_data: res.data.data
                })
            },
            fail: function (res) {
                console.log(res)
            }
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
    itemClick(e) {
        this.setData({
            item: e.detail.title
        })
    },
    onShareAppMessage: function () {

    }

})