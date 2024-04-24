<template>
  <div id="app">
    <NavbarMenu />
    <router-view />
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'

export default {
  name: 'App',
  components: {
    NavbarMenu,
  }
}
</script>

<style>
body {
  margin-top: 75px;
  padding: 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
  line-height: 2;
}
</style>
