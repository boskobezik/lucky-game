import Vue from 'vue';
import VueRouter from 'vue-router';
import CountdownPage from '../components/shared/CountdownPage.vue';
import LottoBall from '../components/shared/LottoBall.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/countdown',
    name: 'Countdown',
    component: CountdownPage,
  },
  {
    path: '/ball',
    name: 'Ball',
    component: LottoBall,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
