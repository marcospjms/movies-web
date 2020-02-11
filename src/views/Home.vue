<template>
  <div class="home">
    <list-all-movies :movies="movies"
                     :loading="loading"
                     :hasPreviousPage="hasPreviousPage"
                     :hasNextPage="hasNextPage"
                     :title="'Top Rated Movies by IMDB'"
                     @toPreviousMoviesPage="toPreviousMoviesPage"
                     @toNextMoviesPage="toNextMoviesPage"
                     @toggleMovie="toggleMovie"/>
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import ListAllMovies from '@/components/ListAllMovies.vue';

export default {
  name: 'Home',
  components: {
    ListAllMovies,
  },
  computed: {
    ...mapState('TopRatedMovies', [
      'movies',
      'loading',
    ]),
    ...mapGetters('TopRatedMovies', [
      'hasPreviousPage',
      'hasNextPage',
    ]),
  },
  methods: {
    ...mapActions('TopRatedMovies', [
      'toPreviousMoviesPage',
      'toNextMoviesPage',
    ]),
    ...mapActions('Bookmarks', [
      'toggleMovie',
    ]),
  },
};
</script>
