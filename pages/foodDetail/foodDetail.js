Page({

  
  data: {
    food:{}
  },

  onLoad: function (options) {
    console.log(JSON.parse(options.food))
    this.setData({
      food: JSON.parse(options.food)
    })
  },
})