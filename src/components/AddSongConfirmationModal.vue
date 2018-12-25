<template>
    <b-modal id="add-song" title="Add song" @ok="handleSubmit" ok-title="Add song">
        <p class="my-4">Add this song to songbook?</p>
    </b-modal>
</template>

<script>
import axios from '@/api/axiosWrapper';

export default {
  props: ['song', 'onSubmit', 'onReset'],
  methods: {
    handleSubmit() {
      return this.onSubmit()
      .then(([id]) => { return axios.get('me/songs/' + id); })
      .then((song) => {
        this.$store.dispatch('addSong', song);
        this.onReset();
      });
    },
  },
}
</script>