import Vue from 'vue'
import Router from 'vue-router'

// import main_page from '../main_page.vue'
// import sub_page from '../sub_page.vue'

import MainContent from '../components/MainContent.vue'
import sub1Content from '../components/Sub1Content.vue'
import sub2Content from '../components/Sub2Content.vue'
import sub3Content from '../components/Sub3Content.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: '/', component: main_page},
    // { path: '/main', component: main_page},
    // { path: '/sub', component: sub_page},
    { path: '/vue/', component: MainContent},
    { path: '/vue/main', component: MainContent},
    { path: '/vue/sub1', component: sub1Content},
    { path: '/vue/sub2', component: sub2Content},
    { path: '/vue/sub3', component: sub3Content}
  ]
})