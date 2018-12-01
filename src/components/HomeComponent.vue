<template>
    <div>
      <h1>HOME</h1>
      <ul id='songs'>
        <li v-for="song in songs" :key="song.id">{{ song.songName }}</li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeComponent',
  data() {
    return {
      songs: [],
    }
  },
  mounted() {
    axios.get(
      'http://localhost:3000/songs',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((response) => { this.songs = response.data; });
  }
}
</script>

<style scoped>
</style>
