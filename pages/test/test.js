var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //增删改存
  adus: function () {
      wx.navigateTo({
          url: '../../pages/adus/adus',
      })
  },

  //机器人
  robot: function () {
      wx.navigateTo({
          url: '../../pages/robot/robot',
      })
  },

  //博客
  blog: function () {
      wx.navigateTo({
          url: '../../pages/blog/blog',
      })
  },

  //菜谱
  foods: function () {
      wx.navigateTo({
          url: '../../pages/foods/foods',
      })
  },

  //新闻
  news: function () {
      wx.navigateTo({
          url: '../../pages/news/news',
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})