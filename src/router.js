import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePageRoute',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPageRoute',
      component: LoginPage,
    }
  ]
})
