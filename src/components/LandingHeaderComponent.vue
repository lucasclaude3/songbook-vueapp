<template>
<div>
    <b-navbar class="ml-auto">
        <b-navbar-brand>
            <img src="./../assets/songbook.png" alt="BV" width="30">
            SongBoo
        </b-navbar-brand>
        <div class="sign-buttons">
            <b-button class="signup">Sign up</b-button>
            <b-button class="signin" v-b-modal.sign-in>Sign in</b-button>
        </div>
    </b-navbar>

    <SigninModal/>
</div>
</template>

<script>
import SigninModal from '@/components/SigninModal.vue'

export default {
    name: 'LandingHeaderComponent',
    components: {
        SigninModal,
    }
}
</script>

<style scoped>
    .sign-buttons button {
        margin: 0 4px;
    }
</style>
