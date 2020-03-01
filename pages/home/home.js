Page({
  data: {
    name: 'YoungHorn',
    age: '18',
    EDG: [
      {number: 1, ID: 'Clearlove7', age: 27},
      {number: 2, ID: 'Meiko', age: 22},
      {number: 3, ID: 'Deft', age: 26},
      {number: 4, ID: 'Scout', age: 22},
    ],
    counter: 0,
  },
  increment() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  decrement() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})