<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const user = ref(null)

watch(route, () => {
  const localUser = JSON.parse(localStorage.getItem('user'))
  user.value = localUser
})

function logOut() {
  if (user.value) {
    localStorage.removeItem('user')
  }
}

</script>

<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link>
      </div>
      <div>

      </div>
      <div>
        <span v-if="user"><router-link :to="{ name: 'profile' }">Profile</router-link> | </span>
        <router-link @click="logOut()" :to="{ name: 'auth' }">{{ user ? 'Sign out' : 'Sign in' }}</router-link>
      </div>
    </div>
    <img src="./assets/img.png" alt="" width="300">
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
  background-color: rgb(26, 26, 125);
  margin-bottom: 50px;
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
  color: white;
}

#nav a.router-link-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}
</style>
