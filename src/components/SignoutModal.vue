<template>
    <b-modal id="sign-in" title="Sign out" @ok="handleSubmit" ok-title="Sign out">
        <p class="my-4">Are you sure you want to sign out?</p>
    </b-modal>
</template>

<script>
import axios from '@/api/axiosWrapper';

export default {
  methods: {
    handleSubmit() {
      axios.get('logout')
        .then(() => { this.$store.dispatch('logout'); });
    },
  }
}
</script>