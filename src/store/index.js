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
  },
  mutations: {
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
  },
  actions: {
    allBalls(state) {
      return state.balls;
    },
    allOdds(state) {
      return state.odds;
    },
    singleBall(state, id) {
      return state.balls.find(ball => ball.id === id);
    },
  },
  modules: {
  },
});
