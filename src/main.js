// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mounted() {
    axios.get('http://47.254.80.41:3000/user/test').then(res => {
      var res = res.data
        if (res.status == '0') {
        this.usersList = []
      } else {
        this.usersList = []
      }
    })
  },
  template: '<App/>',
  components: { App }
})
