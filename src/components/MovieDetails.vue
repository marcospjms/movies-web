<template>
  <div class="container-film">
    <router-link :to="'/movies/' + movie.id">
      <img :src="imageSrc" />
    </router-link>
    <div @click="toggleMovie()"
         :class="{ selected: isBookmark }"
         class="bookmark-btn">
      <i class="fa fa-bookmark"></i>
    </div>
    <div class="movie-info">
      <div class="vote-container">
        <i class="fa fa-star"></i>
        <span class="vote">
          {{ movie.voteAverage.toFixed(1) }}
        </span>
      </div>
      <router-link :to="'/movies/' + movie.id">
        <h2>{{ movie.title }}</h2>
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
  },
  methods: {
    toggleMovie() {
      this.$emit('toggleMovie', this.movie);
    },
  },
  computed: {
    imageSrc() {
      return `https://image.tmdb.org/t/p/original/${this.movie.backdropPath}`;
    },
    isBookmark() {
      return this.bookmarks.findIndex((movie) => movie.id === this.movie.id) !== -1;
    },
  },
};
</script>

<style scoped lang="scss">
  .container-film {
    position: relative;
    background-color: #121212;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  img {
    width: 100%;
    &:hover {
      opacity: 0.9;
    }
  }
  .movie-info {
    padding: 5px 5px;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: #f5c518;
      }
    }

    h2 {
      font-size: 1em;
      margin: 8px 0;
    }
    .vote-container {
      margin-top: 5px;
      i {
        color: #fff427;
      }
      .vote {
        color: #9e9b9b;
      }
    }
  }

  .bookmark-btn {
    position: absolute;
    top: -5px;
    left: 5px;
    font-size: 2em;
    cursor: pointer;
    opacity: 0.7;
    color: #d3c9c9;
    &.selected {
      color: #50f897;
    }
  }

</style>
