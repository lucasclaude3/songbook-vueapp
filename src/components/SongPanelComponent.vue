<template>
<div class="panel-container">
  <div id="song-panel">
    <h1>{{ song.songName }}</h1>
    <h4 class="song-metadata">{{ song.artistName }}</h4>
    <br/>
    <div class="song-metadata">{{ song.lyrics }}</div>
    <br/>
    <div class="song-metadata">{{ song.chords }}</div>
    <br/>
    <b-button variant="secondary" v-on:click.prevent="closePanel">Close</b-button>
    <b-button variant="danger" v-b-modal.delete-song>Delete Song</b-button>
  </div>

  <DeleteSongModal :song-id="song.id" :close-panel="closePanel" />
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
  .panel-container {
    background-color: rgb(255, 243, 205);
    padding: 10px 20px;
  }
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
