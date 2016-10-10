//index.js
//获取应用实例
var app = getApp();
var that;
Page({
  data: {
    array: ['北京', '南京', '厦门','哈尔滨'],
    hidden : false
  },
  onLoad: function () {
    that = this;
    that.loadWeather('南京');
  },
  bindPickerChange: function(e) {
    that.loadWeather(that.data.array[e.detail.value]);
  },
  loadWeather : function(city){

    that.setData({
      hidden : false
    });

    //获取数据 start
      wx.request({
        url: 'http://op.juhe.cn/onebox/weather/query',
        data: {
          'key' : 'c6caa27fe3a764c92ad35a2558948ab9',
          'cityname' : city
        },
        header: {'Content-Type': 'application/json'},
        success: function(res) {
          that.setData({
            city_name : res.data.result.data.realtime.city_name,
            img : res.data.result.data.realtime.weather.img,
            info : res.data.result.data.realtime.weather.info,
            temperature : res.data.result.data.realtime.weather.temperature,
            chuanyi : res.data.result.data.life.info.chuanyi[1],
            hidden : true
          });
        }
      })
    //获取数据 end
  }
 
})
