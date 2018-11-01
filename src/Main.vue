<template>
  <div id="main" v-if="!this.$store.state.loading" >
    <AppPage v-if="this.$store.state.user" />
    <LandingPage v-else />
  </div>
</template>

<script>
import LandingPage from '@/views/LandingPage.vue';
import AppPage from '@/views/AppPage.vue';
import axios from 'axios';

export default {
  name: 'Main',
  components: {
    LandingPage,
    AppPage,
  },
  beforeCreate: function () {
    this.$store.dispatch('loading')
      .then(() => {
        return axios.get(
          'http://localhost:3000/me',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
      })
      .then((user) => { return this.$store.dispatch('login', user.data); })
      .finally(() => { this.$store.dispatch('loaded'); });
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
