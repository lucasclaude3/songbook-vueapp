import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './components/HomeComponent'
import AddSongComponent from './components/AddSongComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/add-song',
      name: 'add-song',
      component: AddSongComponent
    },
  ]
})
