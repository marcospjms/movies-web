import Vue from 'vue';
import Vuex from 'vuex';
import TopRatedMovies from './top-rated-movies';
import Bookmarks from './bookmarks';
import WatchedMovies from './watched-movies';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TopRatedMovies,
    Bookmarks,
    WatchedMovies,
  },
});
