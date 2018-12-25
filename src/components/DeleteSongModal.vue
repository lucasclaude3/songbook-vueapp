<template>
    <b-modal id="delete-song" title="Delete song" @ok="handleSubmit" ok-title="Delete song" ok-variant="danger">
        <p class="my-4">Are you sure you want to delete this song from songbook? This cannot be undone.</p>
    </b-modal>
</template>

<script>
import axios from '@/api/axiosWrapper';

export default {
  props: ['songId', 'closePanel'],
  methods: {
    handleSubmit() {
      axios.delete('me/songs', {
        data: {
          songId: this.songId,
        }
      })
      .then(() => {
        this.$store.dispatch('removeSong', this.songId);
        this.closePanel();
      });
    },
  },
}
</script>