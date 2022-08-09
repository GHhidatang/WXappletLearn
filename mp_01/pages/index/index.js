// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    info: 'hello world',
    imgsrc: "../../image/e50b2fd4bb928a2.jpg",
    randomNum: Math.random().toFixed(2),
    digital: 0,
    msg: "你好,",
    type: 3,
    flag: true,
    arr1: ['苹果', '华为', '小米'],
    sueList: [
      {id: 1, name: '小红'},
      {id: 2, name: '小黄'},
      {id: 3, name: '小蓝'},
    ]
  },
  btnTapHandler(e) {
    console.log(e);
  },
  CountChange(e) {
    this.setData({
      digital: this.data.digital + e.target.dataset.info
    })
    console.log(this.data.digital);
  },
  inputHandler(e) {
    console.log(e.detail.value);
    this.setData({
      msg: e.detail.value
    })
  },
  bindViewTap() {

  },
  onLoad() {

  },
  getUserProfile(e) {

  },
  getUserInfo(e) {

  }
})
