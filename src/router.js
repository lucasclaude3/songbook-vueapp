import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/HomeComponent'
import SongComponent from './components/SongComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/song',
      name: 'song',
      component: SongComponent
    },
  ]
})
