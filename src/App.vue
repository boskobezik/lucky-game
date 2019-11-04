<template>
  <div id="app">
    <div id="nav">
      <router-link to="/countdown">Countdown</router-link>|
      <router-link to="/ball">Lotto ball</router-link>|
      <h3>Lucky Game</h3>
    </div>
    <router-view />
    <LottoBall style="display: inline-block; padding: 25px 0 25px 0;"/>
    <LottoBall style="display: inline-block; padding: 25px 0 25px 0;"/>
    <LottoBall style="display: inline-block; padding: 25px 0 25px 0;"/>
    <br>
    <LottoBall style="display: inline-block; padding: 25px 0 25px 0;"/>
    <LottoBall style="display: inline-block; padding: 25px 0 25px 0;"/>
    <LottoBall style="display: inline-block; padding: 25px 0 25px 0;"/>
    <div class="footer"></div>
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css';
import LottoBall from './components/shared/LottoBall.vue';

export default {
  components: { LottoBall },
};
</script>

<style scoped>
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
  height: 40px; width: auto;
}
</style>

<!-- GLOBAL STYLES -->
<style>
.header {
    background: #1F3046;
}
.footer {
    background: #1F3046;
}
.lb-background {
  /*border: 1px solid #2489ff;*/
  background: #286ED0;
}
.db-background {
  background: #6899DE;
}
</style>
