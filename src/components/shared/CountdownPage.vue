<template>
  <div class="lb-background" style="margin: 4px 0 0 0;
                                    padding: 20px 0 40px 0;"
       :style="{
         // We create a CSS variable to capture the remaining countdown time
         '--delay': Math.abs(this.$store.state.delay) + 's'
         }">
    <div class="circle-wrap">
      <div class="circle">
        <div class="mask full">
          <div class="fill"></div>
        </div>

        <div class="mask half">
          <div class="fill"></div>
        </div>

        <div class="inside-circle">{{getDelay}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // Fake countdown timer. The delay time
    // returned by the socket isn't updated so I faked my own delay.
    this.$store.commit('setIntervalInstance', setInterval(() => {
      this.$store.commit('decrementDelay');
      if (this.$store.state.delay < 1) {
        this.$store.commit('setDelay', 142);
      }
    }, 1000));
  },
  name: 'CountdownPage',
  computed: {
    getDelay() {
      const delay = this.$store.getters.getDelay;
      // Convert delay to miliseconds and create new Date object
      const date = new Date(delay * 1000);
      const minutes = date.getMinutes(); // Extract minutes
      const seconds = date.getSeconds() > 9 // Extract seconds
        ? date.getSeconds()
        : `0${date.getSeconds()}`;

      // Return delay formatted as "mm:ss"
      return `${minutes}:${seconds}`;
    },
  },
};
</script>

<style scoped>
.background{
  background: #286ED0;
}
.circle-wrap {
  margin: 0px auto;
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 50%;
}
.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}
.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}
.circle-wrap .circle .mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #6899DE;
}
.circle-wrap .circle .mask.full,
.circle-wrap .circle .fill {
  /* --delay is declared on the style attribute of the parent element */
  animation: fill ease-in-out var(--delay);
  transform: rotate(0deg);
}
@keyframes fill {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.circle-wrap .inside-circle {
  width: 142px;
  height: 142px;
  border-radius: 50%;
  background: #286ED0;
  line-height: 136px;
  text-align: center;
  margin-top: 4px;
  margin-left: 4px;
  position: absolute;
  z-index: 100;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 2.7em;
  color: white;
}
</style>
