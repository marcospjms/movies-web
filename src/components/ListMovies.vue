<template>
  <div class="container-films">
    <h1>{{ title }}</h1>
    <div v-for="movie in topRatedMovies.movies" v-bind:key="movie.id">
      <h2>{{ movie.title }} ({{ movie.vote_average }})</h2>
    </div>
  </div>
</template>

<script>
import MovieMixin from '../mixins/MovieMixin';

export default {
  name: 'ListFilms',
  mixins: [MovieMixin],
  props: {
    title: {
      type: String,
      default: 'Lista de Filmes',
    },
  },
  created() {
  },
};
</script>

<style scoped lang="scss">
</style>
