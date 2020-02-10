<template>
  <div class="container-films">
    <h1>{{ title }}</h1>
    <button @click="toPreviousTopRatedMoviesPage"
            :class="{ disabled: !hasPreviousPage() }">
      Página anterior
    </button>
    <button @click="toNextTopRatedMoviesPage"
            :class="{ disabled: !hasNextPage() }">
      Próxima página
    </button>
    <template v-if="!topRatedMovies.loading">
      <div v-for="movie in topRatedMovies.movies" v-bind:key="movie.id">
        <h2>{{ movie.title }} ({{ movie.voteAverage }})</h2>
      </div>
    </template>
    <template v-if="topRatedMovies.loading">
      <div class="loading">
        Carregando filmes
      </div>
    </template>
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
