// page/badminton/index.js

const requestUrl = 'https://liulong.site/test';
const duration = 2000

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: '1',
        title:'周三报名，跟帖',
        persons:[
          {
            id: '1',
            name:'Martin'
          }, 
          {
            id: '2',
            name:'David'
          }
        ]
      }
    ],
    reqeustData: "...",
    loginInfo: 'login',
    userInfo: "userInfo"
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    this.setData({
      userInfo: JSON.stringify(e)
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
    var self = this
    self.setData({ reqeustData: "request" })
    wx.request({
      url: requestUrl,
      success: function (res) {
        self.setData({ reqeustData: JSON.stringify(res.data) })
      },
      fail: function (err) {
        self.setData({ reqeustData: JSON.stringify(err) })
      }
    })

    wx.login({
      success: function (res) {
        self.setData({
          loginInfo: JSON.stringify(res)
        })
        
        console.log("login success")
        console.log(res)
        _getUserInfo()
      },
      fail: function (err) {
        self.setData({
          loginInfo: JSON.stringify(res)
        })
        console.log("login fail")
        console.log(err)
      }
    })
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