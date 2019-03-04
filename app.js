//app.js
const regeneratorRuntime = require('./lib/runtime.js')
App({
  globalData: {
    token: '',
    name: '',
    password: '',
    phoneNumber: '',
    idNumber: '',
    province: '',
    area: '',
    city: '',
    address: '',
    curriculum: 0,
    learnedTime: 0,
    medicalBeans: 0,
    classify: [],
    flowClassify: []
  },
  onLaunch: function() {
  }
})