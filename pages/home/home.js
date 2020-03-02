// pages/home/home.js
Page({
  data: {
    titles: ['衣服', '鞋子', '裤子']
  },
  handleBtnClick() {
    console.log('------')
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleLongPress() {
    console.log('handleLongPress')
  },
  handleInner(event) {
    console.log(event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleItemClick(event) {
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index)
  },


  // ------------- 事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleVindView1() {
    console.log('handleVindView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleVindView2() {
    console.log('handleVindView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleVindView3() {
    console.log('handleVindView3')
  }
    
})