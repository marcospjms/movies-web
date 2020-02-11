import Vue from 'vue';
import Vuex from 'vuex';
import topRatedMoviesStore from './topRatedMoviesStore';
import bookmarksStore from './bookmarksStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topRatedMoviesStore,
    bookmarksStore,
  },
});
