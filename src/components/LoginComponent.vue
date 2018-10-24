<template>
    <div class="login">{{ msg }} {{ username }}</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginComponent',
    props: {
        msg: String,
    },
    data () {
        return {
            username: '',
        }
    },
    created() {
        axios
            .get('http://localhost:3000/users/')
            .then(response => { this.username =  response.data[0].username; });
    }
}
</script>

<style scoped>
    .login {
        color: blue;
    }
</style>
