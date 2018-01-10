var app = getApp()
Page({

    data: {
        userInfo: {},//登录信息
        hasUserInfo: false,//判断是否已登录
        canIUse: wx.canIUse('button.open-type.getUserInfo')//判断当前版本是否可用该组件(或api,参数,回调)等,(组件.属性.值),返回boolean
    },


    onLoad: function (options) {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {//如果请求按钮支持 open-type=getUserInfo 属性,则请求之后用回调
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回,所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 该版本不支持 open-type=getUserInfo 属性时
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },

    //点击按钮获取用户信息
    getUserInfo: function (e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },


})