<template>
<div>
    <b-navbar class="ml-auto">
        <b-navbar-brand>
            <img src="./../assets/songbook.png" alt="BV" width="30">
            SongBook
        </b-navbar-brand>
        <div class="sign-buttons">
            <b-button class="register" v-b-modal.register>Register</b-button>
            <b-button class="sign-in" v-b-modal.sign-in>Sign in</b-button>
        </div>
    </b-navbar>

    <SigninModal/>
    <RegisterModal/>
</div>
</template>

<script>
import SigninModal from '@/components/SigninModal.vue'
import RegisterModal from '@/components/RegisterModal.vue'

export default {
    name: 'LandingHeaderComponent',
    components: {
        SigninModal,
        RegisterModal,
    }
}
</script>

<style scoped>
    .sign-buttons button {
        margin: 0 4px;
    }
</style>
