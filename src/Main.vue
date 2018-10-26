<template>
  <div id="main">
    <LandingPage/>
    <!-- <div id="account">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import LandingPage from '@/views/LandingPage.vue';

export default {
  name: 'Main',
  components: {
    LandingPage,
  }
}
</script>

<style>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
