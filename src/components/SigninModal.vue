<template>
    <b-modal id="sign-in" title="Sign in" @ok="handleOk">
        <p class="my-4">Ola que tal</p>
            <b-form-group
                id="fieldset1"
                description="Let us know your name."
                label="Enter your name"
                label-for="input1"
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
import axios from 'axios';

export default {
  computed: {
    state () {
      return ((this.username.length > 0) && (this.password.length > 0)) ? true : false
    },
    invalidFeedback () {
      if (!this.username) {
          return 'You must specify your username';
      }
      if (!this.password) {
          return 'Please enter your password';
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
        'http://localhost:3000/login',
        {
          username: this.username,
          password: this.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
        .then(result => { console.log(result); });
    }
  }
}
</script>