
import makeCommonMovieStore from '@/store/makeCommonMovieStore';

const initMovies = [];
const initPageSize = 20;
const initState = {
  allMovies: initMovies,
  pageSize: initPageSize,
  totalPages: initMovies.length / initPageSize,
  currentPage: 1,
};

const initMutation = {
  addMovie(state, movie) {
    state.allMovies.push(movie);
  },
  removeMovie(state, index) {
    state.allMovies.splice(index, 1);
  },
};

export default {
  ...makeCommonMovieStore(initState, initMutation),
  actions: {
    updateMovies({ commit, state }) {
      const { currentPage, pageSize, allMovies } = state;
      const initIndex = (currentPage - 1) * pageSize;
      commit('initLoading');
      commit('setMovies', allMovies.slice(initIndex, initIndex + pageSize));
      commit('finishLoading');
      commit('setTotalPages', allMovies.length / pageSize);
    },
    toNextMoviesPage({ commit, dispatch, getters }) {
      if (getters.hasNextPage) {
        commit('nextPage');
        dispatch('updateMovies');
      }
    },
    toPreviousMoviesPage({ commit, dispatch, getters }) {
      if (getters.hasPreviousPage) {
        commit('previousPage');
        dispatch('updateMovies');
      }
    },
    toggleMovie({ commit, dispatch, state }, movie) {
      const { allMovies } = state;
      const index = allMovies.findIndex((m) => m.id === movie.id);
      if (index !== -1) {
        commit('removeMovie', index);
      } else {
        commit('addMovie', movie);
      }
      dispatch('updateMovies');
    },
  },
};
