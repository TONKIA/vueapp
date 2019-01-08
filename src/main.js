import Vue from 'vue'
import app from './app.vue'
import Router from './router'

//按需导入mint-ui
import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: '#app',
    //将app组件渲染至 #app
    render: c => c(app),
    // router: Router
})