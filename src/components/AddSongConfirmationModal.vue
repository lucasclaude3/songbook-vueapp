<template>
    <b-modal v-model="show" id="add-song" title="Add song">
        <p class="my-4">Add this song to songbook?</p>
        <div slot="modal-footer" class="w-100">
          <b-btn class="float-left" variant="danger" @click="show=false">Cancel</b-btn>
          <b-btn class="float-right" variant="primary" @click="handleSubmit(true)">Validate and go to home</b-btn>
          <b-btn class="float-right" variant="secondary" @click="handleSubmit(false)">Validate</b-btn>
        </div>
    </b-modal>
</template>

<script>
import axios from '@/api/axiosWrapper';
import router from '@/router.js'

export default {
  props: ['song', 'onSubmit', 'onReset', 'showAlert'],
  data () {
    return {
      show: false,
    };
  },
  methods: {
    handleSubmit(goToHome) {
      this.onSubmit()
      .then(([id]) => { return axios.get('me/songs/' + id); })
      .then(response => response.data)
      .then(([song]) => {
        this.$store.dispatch('addSong', song);
        this.onReset();
        this.show = false;
        if (goToHome) {
          router.replace('/home');
        }
        this.showAlert('New song successfully added to songbook!');
      });
    },
  },
}
</script>