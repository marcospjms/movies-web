import actions from '../bookmarks/actions';

export default {
  ...actions,
  toggleWatchedMovie(context, movie) {
    actions.toggleBookmark(context, movie);
  },
};
