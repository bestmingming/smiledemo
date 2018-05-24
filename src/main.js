// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import {Button, Row, Col,Swipe, SwipeItem, Lazyload} from 'vant' //局部引入


Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload);


// import Vant from 'vant' //引入vant 全局引入 会影响打开速度
// import 'vant/lib/vant-css/index.css' //引入样式
// Vue.use(Vant) //使用vant 全局引入



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
