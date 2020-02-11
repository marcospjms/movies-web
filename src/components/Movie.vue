<template>
  <div class="container-film">
    <router-link :to="'/movies/' + movie.id">
      <img :src="imageSrc" />
    </router-link>
    <div class="movie-info">
      <span class="vote">{{ movie.voteAverage.toFixed(1) }}</span>
      <router-link :to="'/movies/' + movie.id">
        <h2 @click="toggleMovie()">{{ movie.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Movie',
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
  },
  methods: {
    toggleMovie() {
      this.$emit('toggleMovie', this.movie);
    },
  },
  computed: {
    imageSrc() {
      return `https://image.tmdb.org/t/p/w200/${this.movie.posterPath}`;
    },
  },
};
</script>

<style scoped lang="scss">
  .container-film {
    width: 200px;
    margin: 10px;
    margin-left: 0;
    background-color: #121212;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  img {
    height: 300px;
    width: 200px;
    &:hover {
      opacity: 0.9;
    }
  }
  .movie-info {
    padding: 0 5px;
    height: 90px;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: #f5c518;
      }
    }

    h2 {
      font-size: 1em;
    }
    .vote {
      color: #9e9b9b;
    }
  }

</style>
