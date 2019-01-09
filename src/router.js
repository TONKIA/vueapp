import VueRouter from 'vue-router'

import home from './page/home.vue'

var router = new VueRouter({
    router: [
        { path: '/home', component: home }
    ],
})

export default router