<template>
  <div class="container-movie">
    <router-link :to="'/movies/' + movie.id">
      <img :src="imageSrc" />
    </router-link>

    <i :class="{ selected: isBookmark }"
       @click="toggleBookmark()"
       class="fa fa-bookmark bookmark-icon"></i>

    <i :class="{watched: isWatchedMovie}"
       :title="watchedTitle"
       @click="toggleWatchedMovie"
       class="fa fa-check watched-movie-icon">
    </i>

    <div class="movie-info">
      <div class="vote-container">
        <i class="fa fa-star"></i>
        <span class="vote">
          {{ movie.voteAverage.toFixed(1) }}
        </span>
      </div>
      <router-link :to="'/movies/' + movie.id">
        <h2>
          {{ movie.title }}
        </h2>
      </router-link>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MovieDetails',
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
    isWatchedMovie() {
      return this.watchedMovies.findIndex((movie) => movie.id === this.movie.id) !== -1;
    },
    watchedTitle() {
      return this.isWatchedMovie ? 'Watched movie' : 'Unattended movie';
    },
  },
};
</script>

<style scoped lang="scss">

  @import '../assets/styles/icons';
  @import '../assets/styles/movie';

  img {
    width: 100%;
    &:hover {
      opacity: 0.9;
    }
  }

</style>
