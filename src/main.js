import Vue from 'vue'

import App from './App.vue'

import $ from 'jquery'
Vue.prototype.$ = $

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入路由
import router from './router'

Vue.config.productionTip = false

//设置axios到Vue原型上
import axios from 'axios'
Vue.prototype.$axios = axios
//抽取后的axios在使用时   须将axios改写为this.$axios

//配置全局基地址 （详解查看github文档）
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
//token添加到情求头
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

new Vue({
  render: h => h(App),
  //挂载router
  router
}).$mount('#app')
