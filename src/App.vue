<template>
  <Login />
</template>

<script>
import Login from './views/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
html {
  min-height: 99%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-image: url("assets/background.jpg");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
