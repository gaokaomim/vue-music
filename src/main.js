import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/stylus/index.styl'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
/* eslint-disable no-new */

fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
    loading: require('common/image/default.png')
})
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store

})