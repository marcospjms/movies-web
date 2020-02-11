import state from '../movies/state';

const persistMovies = (movies) => {
  localStorage.bookmarks = JSON.stringify(movies);
};

const allMovies = localStorage.bookmarks ? JSON.parse(localStorage.bookmarks) : [];
const totalPages = allMovies.length / state.pageSize;
const currentPage = 1;

export default {
  ...state,
  movies: [],
  allMovies,
  totalPages,
  currentPage,
  persistMovies,
};
