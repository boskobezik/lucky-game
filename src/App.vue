/**
 * @fileoverview Main component of the app. Wraps all other components.
 * @author buddhacatmonk@gmail.com (Boško Bezik)
 */
<template>
  <div id="app">
    <div id="nav">
      <h3>Lucky Game ({{getCurrentEventType}})</h3>
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

/**
 * Decide which route to take.
 * @param {string} dataType Data type, decided which route to push.
 */
function makeRoutingDecision(dataType) {
  switch (dataType) {
    case 'countdown':
      if (this.$router.currentRoute.name !== 'Countdown'
      || !this.$router.currentRoute.name) {
        this.$router.push('/countdown');
      } break;

    case 'gamescreen':
    case 'ball':
    case 'results':
    default:
      if (this.$router.currentRoute.name !== 'GameScreen') {
        this.$router.push('/gameScreen');
      } break;
  }
}

export default {
  created() {
    // Not much going on here, I've copy/pasted the connection sample
    // given in the specification file.
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
          this.$store.commit('setCurrentEventType', eventType);
          const { data } = res;
          switch (eventType) {
            case 'state':
              // We commit all the recieved data upon receiving the 'state' event type.
              this.$store.commit('setAll', data);
              makeRoutingDecision.call(this, data.type);
              if (data.type === 'ball') {
                this.$store.commit('replacePlaceholders', data.balls);
              }
              this.$store.commit('updateOverUnder');
              this.$store.commit('updateEvenOddNumbersCount');
              // console.log('state: ', data);
              break;
            case 'new':
              // We set placeholders/odds upon receiving the 'new' event type.
              this.$store.commit('setOdds', data.odds);
              this.$store.commit('updateOverUnder');
              this.$store.commit('updateEvenOddNumbersCount');
              makeRoutingDecision.call(this, eventType);
              // console.log('new: ', data);
              break;
            case 'ball':
              // We add and replace the newly received ball upon
              // receiving the 'ball' event type.
              this.$store.commit('addBall', data);
              this.$store.commit('replacePlaceholder', data);
              this.$store.commit('updateOverUnder');
              this.$store.commit('updateEvenOddNumbersCount');
              makeRoutingDecision.call(this, eventType);
              // console.log('ball: ', data);
              break;
            case 'results':
              // We replace all odds with balls drawn during the match
              // upon receiving the 'results' event type.
              this.$store.commit('replacePlaceholders', data.balls);
              this.$store.commit('updateOverUnder');
              this.$store.commit('updateEvenOddNumbersCount');
              makeRoutingDecision.call(this, eventType);
              // console.log('results: ', data);
              break;
            case 'countdown':
              // We switch to the CountdownScreen component
              // upon receiving the 'countdown' message.
              this.$store.commit('clearState');
              makeRoutingDecision.call(this, eventType);
              // console.log('countdown: ', data);
              break;
            default: break;
          }
        }
      });
    });
  },
  computed: {
    getCurrentEventType() {
      const temp = this.$store.state.currentEventType;
      if (temp) {
        return temp.charAt(0).toUpperCase() + temp.slice(1);
      }
      return '';
    },
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

<style>
/* Mockup defined styles */
.header {
  background: #1f3046;
}
.footer {
  background: #1f3046;
}
.lb-background {
  background: #286ed0;
}
.db-background {
  background: #6899de;
}
/** mockup defined styles **/

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
