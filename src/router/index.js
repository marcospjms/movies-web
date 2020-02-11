import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Bookmarks from '../views/Bookmarks.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
