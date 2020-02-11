import MoviesService from '@/services/movies.service';

export default {
  namespaced: true,
  state: {
    movies: [],
    totalPages: 10,
    currentPage: 0,
    loading: false,
    moviesService: new MoviesService(),

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
        state.moviesService.fetchTopRatedMovies(state.currentPage).then((result) => {
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
