//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    foods:[],
    isLoading:false,
  },

  //获取输入
  getContent:function(e){
    this.food=e.detail.value
  },

  //搜索美食
  searchFood:function(){
    if (this.food == null) {
      return;
    }
    this.setData({
      isLoading:true
    })
    var that = this;
    wx.request({
      url: 'http://api.jisuapi.com/recipe/search',
      data: {
        appkey: 'abdf02e5b0a4dd78',
        keyword: this.food,
        num: '20',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          isLoading:false,
          foods: res.data.result.list
        })
      }
    })
  },

  //查看详情
  foodDetail:function(e){
    var food = e.currentTarget.dataset.food;
    wx.navigateTo({
      url: '../foodDetail/foodDetail?food='+JSON.stringify(food),
    })
  }

})
