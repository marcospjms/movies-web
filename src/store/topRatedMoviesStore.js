import MoviesService from '@/services/moviesService';
import makeCommonMovieStore from '@/store/makeCommonMovieStore';

export default {
  ...makeCommonMovieStore({ moviesService: new MoviesService() }),
  actions: {
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
    toNextTopRatedMoviesPage({ commit, dispatch, getters }) {
      if (getters.hasNextPage) {
        commit('nextPage');
        return dispatch('updateMovies');
      }
      return new Promise((resolve) => resolve());
    },
    toPreviousTopRatedMoviesPage({ commit, dispatch, getters }) {
      if (getters.hasPreviousPage) {
        commit('previousPage');
        return dispatch('updateMovies');
      }

      return new Promise((resolve) => resolve());
    },
  },
};
