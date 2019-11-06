/**
 * @fileoverview Vue router configuration file.
 * @author buddhacatmonk@gmail.com (Boško Bezik)
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import CountdownPage from '../components/lotto/CountdownPage.vue';
import GameScreen from '../components/lotto/GameScreen.vue';
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
  // We use 'history' mode even though we don't have any
  // server side rendering going on here, it just looks better without the hash :)
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
