<template>
<div>
    <b-navbar class="ml-auto">
        <b-navbar-brand>
            <img src="./../assets/songbook.png" alt="BV" width="30">
            SongBoo
        </b-navbar-brand>
        <div class="sign-buttons">
            <b-button class="signin" v-b-modal.sign-in>Sign out</b-button>
        </div>
    </b-navbar>
</div>
</template>

<script>
import SigninModal from '@/components/SigninModal.vue'

export default {
    name: 'AppHeaderComponent',
    components: {
    }
}
</script>

<style scoped>
    .sign-buttons button {
        margin: 0 4px;
    }
</style>
