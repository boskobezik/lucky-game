<template>
  <div id="app">
    <div id="nav">
      <router-link to="/countdown">Countdown</router-link>|
      <router-link to="/gameScreen">Game screen</router-link>|
      <h3>Lucky Game</h3>
    </div>
    <main class="lb-background">
      <router-view />
    </main>
    <div class="footer">
      <router-view name="gameFooter"/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 10px;
  background: #1f3047;
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
.footer {
  height: 40px;
  width: auto;
}
</style>

<!-- GLOBAL STYLES -->
<style>
.header {
  background: #1f3046;
}
.footer {
  background: #1f3046;
}
.lb-background {
  /*border: 1px solid #2489ff;*/
  background: #286ed0;
}
.db-background {
  background: #6899de;
}
.pl-25 {
  padding-left: 25px;
}
.pl-15 {
  padding-left: 15px;
}
.inline-block {
  display: inline-block;
}
/*----- Clearfix: Force an Element not to collapse -----*/
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>
