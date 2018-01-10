var app=getApp();

Page({

  //渲染数据
  data: {
    foodArr:[], 
  },

  //获取输入内容
  getContent:function(e){
    this.food = e.detail.value
  },

  //增
  addFood: function () {
    if (this.food==null){
        return;
    }
    this.data.foodArr.push({
      food: this.food,
      isEdit: false,
    })
    this.setData({
       foodArr: this.data.foodArr,
    })
  },

  //删
  deleteFood: function (e) {
    var deleteIndex=e.target.dataset.index;
    this.data.foodArr.splice(deleteIndex,1)
    this.setData({
      foodArr: this.data.foodArr,
    })
  },

  //获取修改后的值
  getFood:function(e){
    this.newFood = e.detail.value
  },
  
  //改
  updateFood: function (e) {
    var Index = e.target.dataset.index;
    this.data.foodArr[Index].isEdit = !this.data.foodArr[Index].isEdit;
    if (!this.data.foodArr[Index].isEdit){//保存时
      this.data.foodArr[Index].food = this.newFood || this.data.foodArr[Index].food;
    }
    this.setData({
      foodArr: this.data.foodArr,
    })
  },

  //保存全部到本地
  saveAll: function (e) {
    wx.setStorageSync("foodArr", this.data.foodArr)
  },

  //历史记录
  history: function (e) {
    this.setData({
      foodArr: wx.getStorageSync("foodArr")||[],
    })
  },

  //清空全部
  deleteAll: function (e) {
    wx.removeStorageSync("foodArr")
    this.setData({
      foodArr:[]
    })
  },
})