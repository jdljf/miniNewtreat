//logs.js
import wxappStore from "../../lib/Store.js";

Page(wxappStore.createPage({
  data: {
    message: ''
  },
  onShow: function(){
    console.log(this.store)
  },
  onLoad: function () {
    this.getGlobalData({ localDataKey: 'message' });
    console.log(this.store)
  }
},
  {
    mutations: {
      testMutation: function ({ setData, payload, data }) {
        setData({
          localtime: payload
        });
      }
    }
  }));
