import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventId: null,
    balls: [],
    bonusBalls: [],
    type: null,
    delay: null,
    eventIdToday: null,
    odds: [],
    specialOdds: [],
    bonusType: null,
    time: null,
    delayResultTime: null,
    delayDrawTime: null,
    intervalInstances: [],
  },
  mutations: {
    setAll(state, data) {
      Object.keys(data).forEach((key) => {
        state[key] = data[key];
      });
    },
    setEventId(state, eventId) {
      state.eventId = eventId;
    },
    setBalls(state, balls) {
      state.balls = balls;
    },
    setBonusBalls(state, bonusBalls) {
      state.bonusBalls = bonusBalls;
    },
    setType(state, type) {
      state.type = type;
    },
    setDelay(state, delay) {
      state.delay = delay;
    },
    setEventIdToday(state, eventIdToday) {
      state.eventIdToday = eventIdToday;
    },
    setOdds(state, odds) {
      state.odds = odds;
    },
    setSpecialOdds(state, specialOdds) {
      state.specialOdds = specialOdds;
    },
    setBonusType(state, bonusType) {
      state.bonusType = bonusType;
    },
    setTime(state, time) {
      state.time = time;
    },
    setDelayResultTime(state, delayResultTime) {
      state.delayResultTime = delayResultTime;
    },
    setDelayDrawTime(state, delayDrawTime) {
      state.delayDrawTime = delayDrawTime;
    },
    addBall(state, ball) {
      state.balls.push(ball);
    },
    replacePlaceholder(state, ball) {
      const odds = state.odds[ball.id - 1];
      if (odds) {
        // Check avoids potential TypeError
        odds.id = ball.id;
        odds.odds = ball.ball;
        odds.faded = true;
      }
    },
    replacePlaceholders(state, balls) {
      for (let i = 0; i < state.balls.length; i += 1) {
        const odds = state.odds[i];
        const ball = balls[i];
        if (odds && ball) {
          // Check avoids potential TypeError
          odds.id = ball.id;
          odds.odds = ball.ball;
        }
      }
    },
    decrementDelay(state) {
      state.delay -= 1;
    },
    setIntervalInstance(state, instance) {
      // We clear out all existing instances to avoid
      // more than one running concurrently in the background
      state.intervalInstances.forEach((i) => {
        clearInterval(i);
      });
      state.intervalInstances = [];
      state.intervalInstances.push(instance);
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allOdds(state) {
      return state.odds;
    },
    getDelay(state) {
      return state.delay;
    },
  },
});
