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
import axios from 'axios';
import io from 'socket.io-client';

function deepCopy(source) {
  return JSON.parse(JSON.stringify(source));
}

export default {
  created() {
    const configUrl = 'https://gcm-fra-staging-1.7platform.com:8008/get-lb';
    const query = 'token="token"&clientType="user"';
    const channel = '1d0d6713-b7c9-4f07-ab23-3451a06e8989';
    axios.get(configUrl).then((response) => {
      const socketUrl = response.data.url;
      const socket = io(socketUrl, { query });
      socket.on('connect', () => {
        socket.emit('subscribe', {
          channel,
          subChannels: {
            language: 'en',
            deliveryPlatform: 'Web',
            playerUuid: null,
          },
        });
      });
      socket.on(channel, (res) => {
        if (res) {
          const eventType = res.type;
          const { data } = res;
          switch (eventType) {
            case 'state':
              console.log('state: ', data);

              this.$store.commit('setBalls', deepCopy(data.balls));
              this.$store.commit('setOdds', deepCopy(data.odds));
              console.log(this.$store.state.balls[0]);
              break;
            case 'new':
              console.log('new: ', data);
              break;
            case 'ball':
              console.log('ball: ', data);
              break;
            case 'results':
              console.log('results: ', data);
              break;
            case 'countdown':
              console.log('countdown: ', data);
              break;
            default: break;
          }
        }
      });
    });
  },
};
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
  height: 39px;
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
</style>
