<template>
    <b-modal id="register" title="Register" @ok="handleOk">
        <p class="my-4">Ola que tal</p>
            <b-form-group
                id="register-fields"
                label="Enter your name"
                :invalid-feedback="invalidFeedback"
                :valid-feedback="validFeedback"
                :state="state"
            >

            <b-form-input id="input1" :state="state" v-model.trim="username"></b-form-input>
            <b-form-input id="input2" :state="state" v-model.trim="password" type="password"></b-form-input>
        </b-form-group>
    </b-modal>
</template>

<script>
import axios from '../api/axiosWrapper';

export default {
  computed: {
    state () {
      return ((this.username.length > 0) && (this.password.length > 0) && !this.badRequest) ? true : false
    },
    invalidFeedback () {
      if (!this.username) {
          return 'You must specify a username';
      }
      if (!this.password) {
          return 'Please choose a password';
      }
      if (this.badRequest) {
          return this.badRequest;
      }
      return '';
    },
    validFeedback () {
      return this.state ? 'Thank you' : ''
    }
  },
  data () {
    return {
      username: '',
      password: '',
      badRequest: '',
    }
  },
  methods: {
    handleOk (evt) {
        // Prevent modal from closing
        evt.preventDefault();
        if (this.invalidFeedback.length > 0) {
            alert(this.invalidFeedback);
        }
        this.handleSubmit();
    },
    handleSubmit() {
      axios.post(
        'register',
        {
          username: this.username,
          password: this.password,
        })
        .then((user) => {
          return axios.post('login', {
            username: this.username,
            password: this.password,
          })
        })
        .then(() => {
          return axios.get('me')
        })
        .then((user) => { this.$store.dispatch('login', user.data); })
        .catch((error) => {
          this.badRequest = error.response.data;
          setTimeout(this.clearBadRequest, 2000);
        })
    },
    clearBadRequest() {
      this.badRequest = '';
    }
  }
}
</script>