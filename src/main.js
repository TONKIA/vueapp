import Vue from 'vue'
import app from './app.vue'
//导入路由模块
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
    
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

var vm = new Vue({
    el: '#app',
    //将app组件渲染至 #app
    render: c => c(app),
    router
})