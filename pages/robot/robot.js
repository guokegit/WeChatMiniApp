var app=getApp()

Page({
    data:{
        messageArr:[],
        bottomView:'',
        placehoder:'',
        userIcon: ''
    },
    onLoad:function(){
        this.messageArr = wx.getStorageSync('message') || [];
        this.x=0;
        this.setData({
            messageArr: this.messageArr
        })
    },
    bindinput:function(e){
        console.log(e.detail.value)
        this.inputValue = e.detail.value;
    },
    send: function(){
        if (!this.inputValue){
            return;
        }
        this.x+=1;
        this.messageArr.push({
            id:'id'+this.x,
            name:'me',
            said: this.inputValue
        })
        this.setData({
            messageArr: this.messageArr,
            bottomView: 'id' + this.x,
            placehoder:'',
            userIcon: app.globalData.userInfo.avatarUrl
        })
        wx.setStorageSync('message' , this.messageArr)

        wx.request({
            url: 'http://jisuznwd.market.alicloudapi.com/iqa/query',
            data:{
                question: this.inputValue
            },
            header: {
                Authorization: 'APPCODE a2740d1412a046849242d25a499891f5'
            },
            success:(result)=>{
                console.log(result.data.result.content)
                var answer = result.data.result.content;
                this.x += 1;
                this.messageArr.push({
                    id: 'id' + this.x,
                    name: 'robot',
                    said: answer
                })
                this.setData({
                    messageArr: this.messageArr,
                    bottomView: 'id' + this.x
                    
                })
                wx.setStorageSync('message', this.messageArr)
                
            }
        })
    }
})