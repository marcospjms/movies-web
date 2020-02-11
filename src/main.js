import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Movie from './components/Movie.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.component(Movie.name, Movie);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

store.dispatch('TopRatedMovies/toNextMoviesPage');
store.dispatch('Bookmarks/updateMovies');
