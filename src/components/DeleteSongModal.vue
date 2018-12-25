<template>
    <b-modal id="delete-song" title="Delete song" @ok="handleSubmit" ok-title="Delete song" ok-variant="danger">
        <p class="my-4">Are you sure you want to delete this song from songbook? This cannot be undone.</p>
    </b-modal>
</template>

<script>
import axios from '@/api/axiosWrapper';
import { mapMutations } from 'vuex';

export default {
  props: ['songId', 'closePanel'],
  methods: {
    ...mapMutations([
      'removeSong',
      'showAlert',
    ]),
    handleSubmit() {
      axios.delete('me/songs', {
        data: {
          songId: this.songId,
        }
      })
      .then(() => {
        this.removeSong(this.songId);
        this.closePanel();
        this.showAlert('The song has been correctly deleted.')
      });
    },
  },
}
</script>