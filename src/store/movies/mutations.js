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
};
