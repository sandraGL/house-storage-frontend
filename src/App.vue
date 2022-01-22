<template>
  <router-view to="/"></router-view>
</template>

<script>

export default {
  name: 'App'
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
