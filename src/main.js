import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import './assets/css/global.less'
import axiso from 'axios'

// axios.defaults.headers.put['Content-Type']="text/plain"
axios.defaults.baseURL = "http://127.0.0.1/api/v1/"
// axios.defaults.headers.put['Content-Type']="application/x-www-form-urlencoded"
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
