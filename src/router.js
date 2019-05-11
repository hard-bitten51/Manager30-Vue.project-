//导入vue
import Vue from 'vue'
//导入VueRouter
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入组件
import login from './components/login.vue'
import index from './components/index.vue'
import users from './components/users.vue'
import roles from './components/roles.vue'
import rights from './components/rights.vue'
import goods from './components/goods.vue'
import params from './components/params.vue'
import categories from './components/categories.vue'
import orders from './components/orders.vue'
import reports from './components/reports.vue'
import bozai from './components/bozai.vue'

//路由规则
const routes = [
    // {path: '/',redirect: '/login'},
    {path:'/login',component:login},
    {path:'/bozai',component:bozai},
    {path:'/',component:index,
    children:[
        {path:'users',
        component:users},
        {path:'roles',
        component:roles},
        {path:'rights',
        component:rights},
        {path:'goods',
        component:goods},
        {path:'params',
        component:params},
        {path:'categories',
        component:categories},
        {path:'orders',
        component:orders},
        {path:'reports',
        component:reports},
        {path: '',redirect: 'users'},
    ]},
    ]


//实例化路由对象
const router = new VueRouter({
    mode:'history',
    routes
})


//暴露出去
export default router