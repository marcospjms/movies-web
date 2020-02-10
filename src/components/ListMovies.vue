<template>
  <div class="container-films">
    <h1>{{ title }}</h1>
    <div v-for="movie in movies" v-bind:key="movie">
      {{ movie }}
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
