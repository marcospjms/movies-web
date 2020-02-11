export default {
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
  selectMovie(state, movie) {
    state.selectedMovie = movie;
  },
  initSelectedMovieLoading(state) {
    state.loadingSelectedMovie = true;
  },
  finishSelectedMovieLoading(state) {
    state.loadingSelectedMovie = false;
  },
};
