import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
// eslint-disable-next-line import/no-unresolved
import CountdownPage from '../components/shared/CountdownPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/countdown',
    name: 'Countdown',
    component: CountdownPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
