import Vue from 'vue'

import App from './App.vue'

//全局可用
import $ from 'jquery'
Vue.prototype.$ = $

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入路由
import router from './router'
Vue.config.productionTip = false

//导入抽取的网络请求
import request from './libs/http'
Vue.use(request)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
