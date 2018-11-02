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

    <SignoutModal />
</div>
</template>

<script>
import SignoutModal from '@/components/SignoutModal.vue'

export default {
    name: 'AppHeaderComponent',
    components: {
        SignoutModal,
    },
}
</script>

<style scoped>
    .sign-buttons button {
        margin: 0 4px;
    }
</style>
