//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    description: '中国原创音乐基地5sing Wechat App',
    appInfo: {
      icon: '../../resources/icon_256.png',
      name: 'i5sing'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
