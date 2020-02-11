<template>
  <div class="container-films">
    <h1>{{ title }}</h1>
    <button @click="toPreviousTopRatedMoviesPage"
            :class="{ disabled: !hasPreviousPage }">
      Página anterior
    </button>
    <button @click="toNextTopRatedMoviesPage"
            :class="{ disabled: !hasNextPage }">
      Próxima página
    </button>
    <template v-if="!loading">
      <div v-for="movie in movies" v-bind:key="movie.id">
        <h2>{{ movie.title }} ({{ movie.voteAverage }})</h2>
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
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ListFilms',
  props: {
    title: {
      type: String,
      default: 'Lista de Filmes',
    },
  },
  computed: {
    ...mapState('topRatedMoviesStore', [
      'movies',
      'loading',
    ]),
    ...mapGetters('topRatedMoviesStore', [
      'hasPreviousPage',
      'hasNextPage',
    ]),
  },
  methods: mapActions('topRatedMoviesStore', [
    'toPreviousTopRatedMoviesPage',
    'toNextTopRatedMoviesPage',
  ]),
  created() {
    console.log(this.$store);
  },
};
</script>

<style scoped lang="scss">
</style>
