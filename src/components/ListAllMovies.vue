<template>
  <div class="container-films">
    <h1>{{ title }}</h1>
    <div v-if="!loading" class="movies-list">
      <movie v-for="movie in movies"
             :key="movie.id"
             :movie="movie"
             @toggleMovie="toggleMovie" />
    </div>

    <div v-if="loading" class="loading">
      Carregando filmes
    </div>

    <div class="navigations-btns">
      <button @click="toPreviousMoviesPage"
              :class="{ disabled: !hasPreviousPage }">
        Página anterior
      </button>
      <button @click="toNextMoviesPage"
              :class="{ disabled: !hasNextPage }">
        Próxima página
      </button>
    </div>
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
  h1 {
    color: #f5c518;
    text-align: center;
  }
  .movies-list {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .navigations-btns {
    text-align: center;
    button {
      border-radius: 15px;
      margin: 5px;
      cursor: pointer;
      padding: 10px;
      outline: none;

      &.disabled {
        opacity: 0.2;
        cursor: initial;
      }
    }
  }
</style>
