<template>
  <div id="app">
      <HomePage />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
  line-height: 2;
  margin: 0px;
}
</style>
