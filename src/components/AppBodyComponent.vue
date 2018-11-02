<template>
  <div>
    <router-link to='/home'>Home</router-link>
    <router-link to='/song'>Add a song</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import router from './../router.js'
router.replace('/home');

export default {
  name: 'AppBodyComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
