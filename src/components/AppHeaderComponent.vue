<template>
<div>
    <b-navbar class="ml-auto">
        <b-navbar-brand>
            <img src="@/assets/songbook.png" alt="BV" width="30">
            SongBook
        </b-navbar-brand>
        
        <div class="sign-buttons">
            <router-link class="btn btn-secondary" to='/home'>Home</router-link>
            <router-link class="btn btn-secondary" to='/add-song'>Add a song</router-link>
            <b-button class="sign-in" v-b-modal.sign-out>Sign out</b-button>
        </div>
    </b-navbar>

    <SignoutModal />
</div>
</template>

<script>
import SignoutModal from '@/components/SignoutModal.vue'
import router from '@/router.js'

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
