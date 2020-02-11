export default {
  hasNextPage(state) {
    return state.currentPage < state.totalPages;
  },
  hasPreviousPage(state) {
    return state.currentPage > 1;
  },
};
