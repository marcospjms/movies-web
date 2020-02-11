<template>
  <div class="container-films">
    <h1>{{ title }}</h1>
    <button @click="toPreviousMoviesPage"
            :class="{ disabled: !hasPreviousPage }">
      Página anterior
    </button>
    <button @click="toNextMoviesPage"
            :class="{ disabled: !hasNextPage }">
      Próxima página
    </button>
    <template v-if="!loading">
      <div v-for="movie in movies" v-bind:key="movie.id">
        <movie :movie="movie" @toggleMovie="toggleMovie" />
      </div>
    </template>
    <template v-if="loading">
      <div class="loading">
        Carregando filmes
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'ListAllFilms',
  props: {
    title: {
      type: String,
      default: 'Lista de Filmes',
    },
    movies: {
      default: [],
    },
    hasPreviousPage: {
      type: Boolean,
      default: false,
    },
    hasNextPage: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toPreviousMoviesPage() {
      this.$emit('toPreviousMoviesPage', true);
    },
    toNextMoviesPage() {
      this.$emit('toNextMoviesPage', true);
    },
    toggleMovie(movie) {
      this.$emit('toggleMovie', movie);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
