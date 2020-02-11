import state from '../movies/state';

const allMovies = localStorage.allMovies ? JSON.parse(localStorage.allMovies) : [];
const totalPages = allMovies.length / state.pageSize;
const currentPage = 1;

export default {
  ...state,
  movies: [],
  allMovies,
  totalPages,
  currentPage,
};
