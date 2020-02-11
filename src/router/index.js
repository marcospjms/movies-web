import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Bookmarks from '../views/Bookmarks.vue';
import Details from '../views/Details.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movies/:id',
    name: 'Details',
    component: Details,
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
