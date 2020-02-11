import Vue from 'vue';
import Vuex from 'vuex';
import topRatedMoviesStore from './topRatedMoviesStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topRatedMoviesStore,
  },
});
