<template>
<div>
  <div>
    <div class="tab-header">
      <h1>Add a new song</h1>
      <b-alert :show="dismissCountDown"
                dismissible
                fade
                variant="warning"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
                class="created-alert">
        New song successfully created!
      </b-alert>
    </div>
    <b-form id="add-song-form" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-input id="song" v-model.trim="form.song" placeholder="Song name"></b-form-input>
      <b-form-input id="artist" v-model.trim="form.artist" placeholder="Artist name"></b-form-input>
      <b-form-textarea id="lyrics" :rows="3" :max-rows="6" v-model.trim="form.lyrics" placeholder="Lyrics"></b-form-textarea>
      <b-form-textarea id="chords" :rows="3" :max-rows="6" v-model.trim="form.chords" placeholder="Chords"></b-form-textarea>
      <b-button variant="primary" v-b-modal.add-song>Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>

  <AddSongConfirmationModal :on-submit="onSubmit" :on-reset="onReset" :show-alert="showAlert" />
</div>
</template>

<script>
import axios from '@/api/axiosWrapper';
import AddSongConfirmationModal from '@/components/AddSongConfirmationModal.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    AddSongConfirmationModal,
  },
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
  computed: mapState({
    dismissCountDown: state => state.dismissCountDown,
  }),
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
    },
    ...mapMutations([
      'countDownChanged',
      'showAlert',
    ]),
  }
}
</script>

<style>
  #add-song-form > * {
    margin-top: 10px;
    max-width: calc(100% - 20px);
  }
  .created-alert {
    margin: 0px 20px;
    vertical-align: super;
  }
</style>
