
import makeCommonMovieStore from '@/store/makeCommonMovieStore';

const initMovies = localStorage.allMovies ? JSON.parse(localStorage.allMovies) : [];
const initPageSize = 20;
const initState = {
  allMovies: initMovies,
  pageSize: initPageSize,
  totalPages: initMovies.length / initPageSize,
  currentPage: 1,
};

const persistMovies = (movies) => {
  localStorage.allMovies = JSON.stringify(movies);
};

const initMutation = {
  addMovie(state, movie) {
    state.allMovies.push(movie);
    persistMovies(state.allMovies);
  },
  removeMovie(state, index) {
    state.allMovies.splice(index, 1);
    persistMovies(state.allMovies);
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
