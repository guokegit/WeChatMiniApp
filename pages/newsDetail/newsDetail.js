var app = getApp();
var WxParse = require('../../plugins/wxParse/wxParse.js')

Page({

    data: {

    },

    onLoad: function (options) {
        var that = this;
        var webUrl = options.webUrl;
        wx.request({
            url: webUrl,
            success: (result) => {
                console.log(result)                
                var webhtml = result.data.slice(15).replace('<title>','<title style="display:none">')
                WxParse.wxParse('article', 'html', webhtml, that, 5);
            }
        })
    },
})