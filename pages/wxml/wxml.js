// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序',
    firstname: 'Kobe',
    lastname: 'Bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 70,
    movies: ['星际穿越','大话西游','盗梦空间','变形金刚'],
    nums: [
      [1, 2, 4, 5, 23],
      [123, 234523, 1234, 413, 124],
      [213, 123, 234, 436, 237]
    ],
    letters: ['a','b','c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000);
  },
  handleSwichColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  }
})