<template>
<div>
  <div>
    <h1>Add a new song</h1>
    <b-form id="add-song-form" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-input id="song" v-model.trim="form.song" placeholder="Song name"></b-form-input>
      <b-form-input id="artist" v-model.trim="form.artist" placeholder="Artist name"></b-form-input>
      <b-form-textarea id="lyrics" :rows="3" :max-rows="6" v-model.trim="form.lyrics" placeholder="Lyrics"></b-form-textarea>
      <b-form-textarea id="chords" :rows="3" :max-rows="6" v-model.trim="form.chords" placeholder="Chords"></b-form-textarea>
      <b-button variant="primary" v-b-modal.add-song>Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>

  <AddSongConfirmationModal :on-submit="onSubmit" :on-reset="onReset" />
</div>
</template>

<script>
import axios from '@/api/axiosWrapper';
import AddSongConfirmationModal from '@/components/AddSongConfirmationModal.vue';

export default {
  data () {
    return {
      form: {
        song: '',
        artist: '',
        lyrics: '',
        chords: '',
      },
      show: true,
    }
  },
  components: {
    AddSongConfirmationModal,
  },
  methods: {
    onSubmit () {
      return axios.post('me/songs', {
        songName: this.form.song,
        artistName: this.form.artist,
        lyrics: this.form.lyrics,
        chords: this.form.chords,
      })
      .then(response => response.data);
    },
    onReset () {
      /* Reset our form values */
      this.form.song = '';
      this.form.artist = '';
      this.form.lyrics = '';
      this.form.chords = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped>
  #add-song-form > * {
    margin-top: 10px;
    max-width: calc(100% - 20px);
  }
</style>
