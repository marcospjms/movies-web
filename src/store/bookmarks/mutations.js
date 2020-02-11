import mutations from '../movies/mutations';

export default {
  ...mutations,
  addMovie(state, movie) {
    state.allMovies.push(movie);
    state.persistMovies(state.allMovies);
  },
  removeMovie(state, index) {
    state.allMovies.splice(index, 1);
    state.persistMovies(state.allMovies);
  },
};
