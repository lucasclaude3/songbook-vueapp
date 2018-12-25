<template>
    <div>
      <h1>HOME</h1>
      <ul>
        <li v-for="song in this.$store.state.songs" :key="song.id">
          <button v-on:click.prevent="showPanel(song)">{{ song.songName }}</button>
        </li>
      </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from '@/api/axiosWrapper';
import SongPanelComponent from '@/components/SongPanelComponent.vue';

Vue.component('song-panel', SongPanelComponent);

export default {
  name: 'HomeComponent',
  data() {
    return {
      songs: [],
    };
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
    }
  }
}
</script>
