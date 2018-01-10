//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        blogArr: [],
    },
    
    onLoad: function () {
        
        //博客
        wx.request({
            url: 'http://39.108.190.79:3389/weixin',
            success:  (result)=>{
                this.setData({
                    blogArr: result.data
                })
                console.log(this.data.blogArr)
            }
        })
    },

    
})
