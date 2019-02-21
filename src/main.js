import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

//1、定义组件

//2、定义路由
//routes=[{path:'/',component:''},{}]
//3、实例化路由
Vue.use(VueRouter)
const router = new VueRouter({
	routes
})
//4、创建和挂载根实例
new Vue({
	router,
	store,
}).$mount('#app')