<template>
  <div id="main">
    <LandingPage/>
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
  text-align: left;
  color: #2c3e50;
}
</style>
