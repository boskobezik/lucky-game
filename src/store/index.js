/**
 * @fileoverview Vuex store configuration file.
 * @author buddhacatmonk@gmail.com (Boško Bezik)
 */
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
    overUnder: 0,
    evenNumbersCount: 0,
    oddNumbersCount: 0,
    currentEventType: null,
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
    updateOverUnder(state) {
      const firstFiveBalls = state.balls.slice(0, 5);
      let sum = 0;
      for (let i = 0; i < firstFiveBalls.length; i += 1) {
        sum += firstFiveBalls[i].ball;
      }
      state.overUnder = sum;
    },
    updateEvenOddNumbersCount(state) {
      state.evenNumbersCount = state.balls.filter(b => b.ball % 2 === 0).length;
      state.oddNumbersCount = state.balls.filter(b => b.ball % 2 !== 0).length;
    },
    clearState(state) {
      state.eventId = null;
      state.balls = [];
      state.bonusBalls = [];
      state.type = null;
      state.delay = null;
      state.eventIdToday = null;
      state.odds = [];
      state.specialOdds = [];
      state.bonusType = null;
      state.time = null;
      state.delayResultTime = null;
      state.delayDrawTime = null;
      state.overUnder = 0;
      state.evenNumbersCount = 0;
      state.oddNumbersCount = 0;
      // We don't clear the intervalInstance state because
      // we need to keep track of active countdown interval instances.
    },
    setCurrentEventType(state, evtType) {
      state.currentEventType = evtType;
    },
  },
  actions: {
    // NOTE: We add async API calls here.
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
