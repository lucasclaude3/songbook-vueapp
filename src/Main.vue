<template>
  <div id="main" v-if="!this.$store.state.loading" >
    <AppPage v-if="this.$store.state.user" />
    <LandingPage v-else />
  </div>
</template>

<script>
import LandingPage from '@/views/LandingPage.vue';
import AppPage from '@/views/AppPage.vue';
import axios from './api/axiosWrapper';

export default {
  name: 'Main',
  components: {
    LandingPage,
    AppPage,
  },
  beforeCreate: function () {
    this.$store.dispatch('loading')
      .then(() => {
        return axios.get('me');
      })
      .then((user) => { return this.$store.dispatch('login', user.data); })
      .finally(() => { this.$store.dispatch('loaded'); })
      .catch(() => { /* No user authenticated */ });
  }
}
</script>

<style>
  #main::after {
    content: "";
    background-image: url('./assets/songbook-background.jpg');
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
</style>
