
export default (_state = {}, _mutations = {}) => ({
  namespaced: true,
  state: {
    movies: [],
    totalPages: 10,
    pageSize: 20,
    currentPage: 0,
    loading: false,
    ..._state,
  },
  getters: {
    hasNextPage(state) {
      return state.currentPage < state.totalPages;
    },
    hasPreviousPage(state) {
      return state.currentPage > 1;
    },
  },
  mutations: {
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
    ..._mutations,
  },
});
