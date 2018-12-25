<template>
  <div id="song-panel">
    <h1>{{ song.songName }}</h1>
    <div class="song-metadata">{{ song.artistName }}</div>
    <div class="song-metadata">{{ song.lyrics }}</div>
    <div class="song-metadata">{{ song.chords }}</div>
    <br/>
    <button class="btn sign-in btn-secondary" v-on:click.prevent="closePanel">Close</button>
  </div>
</template>

<script>
export default {
  name: 'SongPanelComponent',
  props: {
    song: Object,
  },
  data() {
    return {};
  },
  methods: {
    closePanel() {
      this.$emit("closePanel", {});
    }
  },
}
</script>

<style>
  #song-panel {
    background-color: white;
    padding: 10px 20px 20px;
    margin: 20px 30px;
    border-radius: 7px;
    box-shadow: 2px 4px 18px #5a6268;
  }
  .song-metadata {
    white-space: pre;
  }
</style>
