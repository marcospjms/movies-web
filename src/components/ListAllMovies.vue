<template>
  <div class="container-movies">
    <h1>{{ title }}</h1>
    <template v-if="!loading">
      <div class="movies-list">
        <movie v-for="movie in movies"
               :key="movie.id"
               :movie="movie"
               :bookmarks="bookmarks"
               @toggleBookmark="toggleBookmark" />
      </div>

      <div class="page-info">
        ({{ currentPage }} / {{ totalPages }})
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

    </template>
    <div v-if="loading" class="loading">
      Carregando filmes...
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
    bookmarks: {
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
    currentPage: {
      type: Number,
      default: 0,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    toPreviousMoviesPage() {
      this.$emit('toPreviousMoviesPage', true);
    },
    toNextMoviesPage() {
      this.$emit('toNextMoviesPage', true);
    },
    toggleBookmark(movie) {
      this.$emit('toggleBookmark', movie);
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/loading';

  h1 {
    color: $active-actived-link-color;
    text-align: center;
  }
  .movies-list {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .page-info {
    text-align: center;
    margin: 10px 0;
  }

  .navigations-btns {
    text-align: center;
    button {
      background-color: #ffffff;
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
