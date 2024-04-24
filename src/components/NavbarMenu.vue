<template>
    <div class="navbar">
      <div class="nav-link">
        <router-link to="/" class="navbar-link File-1" exact>File #1</router-link>
        <router-link to="/" class="navbar-link File-2" exact>File #2</router-link>
      </div>
    </div>
  </template>
  
  <style>
  body,
  html {
    margin: 0;
    padding: 0;
  }
  
  .navbar {
    background-color: rgb(45, 53, 118);
    padding: 10px;
    display: flex;
    justify-content: center; /* Center the .nav-link container */
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1000;
    border-bottom: 2px solid white;
  }
  
  .nav-link {
    display: flex; /* Use flexbox to evenly space the .navbar-link elements */
    justify-content: space-between; /* Evenly space the .navbar-link elements */
    width: 100%; /* Take up the full width of the .navbar */
    max-width: 800px; /* Limit the maximum width of the .nav-link container */
  }
  
  .navbar-link {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .navbar-link:hover {
  background-color: rgb(19, 24, 62);
  color: #fff;
  padding: 10px;
  border-radius: 8px;
}
.router-link-exact-active {
  background-color: rgb(19, 24, 62);
  color: #fff;
  padding: 10px;
  border-radius: 8px;
}

  </style>
  
  