<template>
  <div class="auth">
    <h1>Lizzard Flash</h1>
    <h2>Sign up or log in</h2>

    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';

export default {
  name: 'auth',

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.user = user

        this.$store.dispatch('setUser', user)
          .then(()=>this.$router.push('/artworks'))

      } else {
        console.log('No user');
      }
    })
  },

  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/stacks',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
};
</script>

<style src="firebaseui/dist/firebaseui.css"></style>
<style scoped>
    .h2 {
      margin-bottom: 12vh;
    }
</style>
