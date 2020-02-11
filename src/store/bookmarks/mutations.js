import mutations from '../movies/mutations';

const persistMovies = (movies) => {
  localStorage.allMovies = JSON.stringify(movies);
};

export default {
  ...mutations,
  addMovie(state, movie) {
    state.allMovies.push(movie);
    persistMovies(state.allMovies);
  },
  removeMovie(state, index) {
    state.allMovies.splice(index, 1);
    persistMovies(state.allMovies);
  },
};
