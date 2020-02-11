import state from '../bookmarks/state';

const allMovies = localStorage.watchedMovies ? JSON.parse(localStorage.watchedMovies) : [];
const totalPages = allMovies.length / state.pageSize;

const persistMovies = (movies) => {
  localStorage.watchedMovies = JSON.stringify(movies);
};


export default {
  ...state,
  movies: [],
  allMovies,
  totalPages,
  persistMovies,
};
