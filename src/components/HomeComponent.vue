<template>
    <div>
      <h1>HOME</h1>
      <ul id='songs'>
        <li v-for="song in songs" :key="song.id">{{ song.songName }}</li>
      </ul>
    </div>
</template>

<script>
import axios from '../api/axiosWrapper';

export default {
  name: 'HomeComponent',
  data() {
    return {
      songs: [],
    }
  },
  mounted() {
    axios.get('me/songs')
      .then((response) => { this.songs = response.data; });
  }
}
</script>

<style scoped>
  h1 {
    margin-top: 20px;
  }
</style>
