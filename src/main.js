import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
import fastclick from 'fastclick'
/* eslint-disable no-new */

fastclick.attach(document.body)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
