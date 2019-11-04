<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/countdown">Countdown</router-link>|
      <h3>Lucky Game</h3>
    </div>
    <router-view />
    <div class="footer"></div>
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css';

export default {

};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 10px;
  background: #1F3047;
  color: white;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer{
  background: #1F3047;
  height: 40px; width: auto;
}
</style>
