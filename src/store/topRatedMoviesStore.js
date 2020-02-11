import Vue from 'vue';
import _ from 'lodash';

const apiKey = 'b4e2d45d3d03415323db46ae46bdd124';
const imdbUrl = 'https://api.themoviedb.org/3/';
const topRatedMoviesUrl = `${imdbUrl}movie/top_rated?api_key=${apiKey}`;

const toCamelCase = (data) => _.mapKeys(data, (v, k) => _.camelCase(k));

const fetchTopRatedMovies = (page = 1) => new Promise((resolve, rejected) => {
  Vue.axios.get(`${topRatedMoviesUrl}&page=${page}`).then((data) => {
    const camelCaseResult = toCamelCase(data.data);
    const { totalPages } = camelCaseResult;
    const movies = camelCaseResult.results.map(toCamelCase);
    resolve({ totalPages, movies });
  }).catch(rejected);
});

export default {
  namespaced: true,
  state: {
    movies: [],
    totalPages: 10,
    currentPage: 0,
    loading: false,

  },
  getters: {
    hasNextPage(state) {
      return state.currentPage < state.totalPages;
    },
    hasPreviousPage(state) {
      return state.currentPage > 1;
    },
  },
  mutations: {
    initLoading(state) {
      state.loading = true;
    },
    finishLoading(state) {
      state.loading = false;
    },
    nextPage(state) {
      state.currentPage += 1;
    },
    previousPage(state) {
      state.currentPage -= 1;
    },
    setMovies(state, movies) {
      state.movies = movies;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    updateMovies({ commit, state }) {
      return new Promise((resolve, rejected) => {
        fetchTopRatedMovies(state.currentPage).then((result) => {
          commit('setTotalPages', result.totalPages);
          commit('setMovies', result.movies);
          commit('finishLoading');
          resolve(result);
        }).catch(rejected);
      });
    },
    toNextTopRatedMoviesPage({ commit, dispatch, getters }) {
      if (getters.hasNextPage) {
        commit('initLoading');
        commit('nextPage');
        dispatch('updateMovies');
      }
    },
    toPreviousTopRatedMoviesPage({ commit, dispatch, getters }) {
      if (getters.hasPreviousPage) {
        commit('initLoading');
        commit('previousPage');
        dispatch('updateMovies');
      }
    },
  },
};
