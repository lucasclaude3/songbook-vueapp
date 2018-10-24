<template>
    <div class="login">{{ msg }}</div>
</template>

<script>
export default {
    name: 'LoginComponent',
    props: {
        msg: String,
    }
}
</script>

<style scoped>
    .login {
        color: blue;
    }
</style>
