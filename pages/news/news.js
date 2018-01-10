const app = getApp()

Page({

    data: {
        newsArr: []
    },

    onLoad: function (options) {
       var that=this;
       wx.request({
           url: "http://toutiao-ali.juheapi.com/toutiao/index",
           data:'top',
           header:{
               Authorization:'APPCODE a2740d1412a046849242d25a499891f5'
           },
           success:(result)=>{
               console.log(result.data.result.data)
               that.setData({
                   newsArr: result.data.result.data
               })
           }
       })
    },

    newsDetail:(e)=>{
        var data=e.currentTarget.dataset;
        var webUrl=data.news.url;
        wx.navigateTo({
            url: '../newsDetail/newsDetail?webUrl=' +webUrl,
        }) 
    },
})