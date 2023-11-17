<script setup>
</script>

<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link>
      </div>
      <router-link :to="{ name: 'auth' }">Sign in</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* position: relative; */
}

/* .headers {
  background-color: #5b5f63;
  text-align: left;
  color: white;
} */

#nav {
  padding: 30px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  /* position: relative; */
}

/* #nav .auth {
  position: absolute;
  right: 0;
  top: 37%;
  padding-right: 20px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}
</style>
