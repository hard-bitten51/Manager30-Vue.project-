//导入axios

import axios from 'axios'

//抽取网络请求的对象
const request = {
    sayHi(){
        console.log('你好啊');
    }
}

//暴露出去 包含install方法的对象
export default {
    //暴露的是对象用install
    install(Vue){
        //添加到Vue的原型上
        Vue.prototype.$request = request
    }
}