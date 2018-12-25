<template>
  <div id="app-body">
    <router-link class="btn sign-in btn-secondary" to='/home'>Home</router-link>
    <router-link class="btn sign-in btn-secondary" to='/add-song'>Add a song</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import router from '@/router.js'
router.replace('/home');

export default {
  name: 'AppBodyComponent',
  props: {
    msg: String
  }
}
</script>

<style>
  div#app-body {
    padding-left: 20px;
    margin-top: 15px;
  }
</style>
