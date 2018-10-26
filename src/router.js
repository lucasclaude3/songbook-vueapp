import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import AppPage from './views/AppPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPageRoute',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'AppPageRoute',
      component: AppPage,
    }
  ]
})
