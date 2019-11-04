import Vue from 'vue';
import VueRouter from 'vue-router';
import CountdownPage from '../components/shared/CountdownPage.vue';
import GameScreen from '../components/shared/GameScreen.vue';
import GameFooter from '../components/shared/GameFooter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/countdown',
    name: 'Countdown',
    component: CountdownPage,
  },
  {
    path: '/gameScreen',
    name: 'GameScreen',
    components: {
      default: GameScreen,
      gameFooter: GameFooter,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
