<template>
    <div>
      <div class="tab-header">
        <h1>Home</h1>
        <b-alert :show="dismissCountDown"
                  dismissible
                  fade
                  variant="warning"
                  @dismissed="dismissCountDown=0"
                  @dismiss-count-down="countDownChanged"
                  class="created-alert">
          {{ alertMessage }}
        </b-alert>
      </div>
      <ul v-if="reversedSongs">
        <li v-for="song in reversedSongs" :key="song.id">
          <b-button variant="secondary" v-on:click.prevent="showPanel(song)">{{ song.songName }}</b-button>
        </li>
      </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from '@/api/axiosWrapper';
import SongPanelComponent from '@/components/SongPanelComponent.vue';
import { mapState, mapMutations } from 'vuex';

Vue.component('song-panel', SongPanelComponent);

export default {
  name: 'HomeComponent',
  data() {
    return {
      songs: [],
    };
  },
  computed: {
    reversedSongs() {
      return this.$store.getters.reversedSongs;
    },
    ...mapState({
      dismissCountDown: state => state.dismissCountDown,
      alertMessage: state => state.alertMessage,
    }),
  },
  mounted() {
    axios.get('me/songs')
      .then((response) => { this.$store.dispatch('loadSongs', response.data); });
  },
  methods: {
    showPanel(song) {
      this.$showPanel({
        component: 'song-panel',
        cssClass: 'panel',
        openOn: 'right',
        props: {
          song,
        }
      });
    },
    ...mapMutations([
      'countDownChanged',
      'showAlert',
    ]),
  },
}
</script>

<style scoped>
  li {
    margin-bottom: 5px;
  }
</style>
