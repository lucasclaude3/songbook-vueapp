<template>
<div>
  <div id="song-panel">
    <h1>{{ song.songName }}</h1>
    <div class="song-metadata">{{ song.artistName }}</div>
    <div class="song-metadata">{{ song.lyrics }}</div>
    <div class="song-metadata">{{ song.chords }}</div>
    <br/>
    <b-button class="sign-in btn-secondary" v-on:click.prevent="closePanel">Close</b-button>
    <b-button class="sign-in btn-danger" v-b-modal.delete-song>Delete Song</b-button>
  </div>

  <DeleteSongModal :song-id="song.id" />
</div>
</template>

<script>
import DeleteSongModal from '@/components/DeleteSongModal.vue'

export default {
  name: 'SongPanelComponent',
  props: {
    song: Object,
  },
  components: {
    DeleteSongModal
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
