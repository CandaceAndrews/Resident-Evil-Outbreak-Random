<template>
<div class="navbar">
        <router-link to="/" class="File 1" exact>File #1</router-link>
        <router-link to="/" class="File 2" exact>File #2</router-link>
</div>
</template>

<script>
export default {
name: 'NavbarMenu',
}
</script>

<style>
body, html {
margin: 0;
padding: 0;
}

.navbar {
background-color: rgb(45, 53, 118);
padding: 10px;
display: flex;
justify-content: space-around;
position: fixed;
top: 0px;
width: 100%;
z-index: 1000;
border-bottom: 2px solid white;
}


.navbar-link {
color: #fff;
text-decoration: none;
padding: 10px;
border-radius: 5px;
transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover,
.router-link-exact-active {
background-color: rgb(255, 34, 86);
color: #fff;
padding: 0px 5px 0px 5px;
}
</style>