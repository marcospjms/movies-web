export default {
  updateMovies({ commit, state }) {
    return new Promise((resolve, rejected) => {
      commit('initLoading');
      state.moviesService.fetchTopRatedMovies(state.currentPage).then((result) => {
        commit('setTotalPages', result.totalPages);
        commit('setMovies', result.movies);
        commit('finishLoading');
        resolve(result);
      }).catch(rejected);
    });
  },
  toNextMoviesPage({ commit, dispatch, getters }) {
    if (getters.hasNextPage) {
      commit('nextPage');
      return dispatch('updateMovies');
    }
    return new Promise((resolve) => resolve());
  },
  toPreviousMoviesPage({ commit, dispatch, getters }) {
    if (getters.hasPreviousPage) {
      commit('previousPage');
      return dispatch('updateMovies');
    }

    return new Promise((resolve) => resolve());
  },
};
