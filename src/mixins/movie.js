export default {
  props: {
    movie: {
      type: Object,
      default() {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
    bookmarks: {
      type: Array,
      default: () => [],
    },
    watchedMovies: {
      default: [],
    },
  },
  methods: {
    toggleBookmark() {
      this.$emit('toggleBookmark', this.movie);
    },
    toggleWatchedMovie() {
      this.$emit('toggleWatchedMovie', this.movie);
    },
  },
  computed: {
    imageSrc() {
      return `https://image.tmdb.org/t/p/original/${this.movie.backdropPath}`;
    },
    isBookmark() {
      return this.bookmarks.findIndex((movie) => movie.id === this.movie.id) !== -1;
    },
    bookMarkTitle() {
      return this.isBookmark ? 'Favorite' : 'Not a favorite';
    },
    isWatchedMovie() {
      return this.watchedMovies.findIndex((movie) => movie.id === this.movie.id) !== -1;
    },
    watchedTitle() {
      return this.isWatchedMovie ? 'Watched movie' : 'Not a watched movie';
    },
  },
};
