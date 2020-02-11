import Vue from 'vue';
import Vuex from 'vuex';
import TopRatedMovies from './top-rated-movies';
import Bookmarks from './bookmarks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TopRatedMovies,
    Bookmarks,
  },
});
