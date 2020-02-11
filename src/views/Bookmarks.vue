<template>
  <div class="home">
    <list-all-movies :movies="movies"
                     :loading="loading"
                     :hasPreviousPage="hasPreviousPage"
                     :hasNextPage="hasNextPage"
                     :title="'Filmes mais bem avaliados no IMDB'"
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
    ...mapState('bookmarksStore', [
      'movies',
      'loading',
    ]),
    ...mapGetters('bookmarksStore', [
      'hasPreviousPage',
      'hasNextPage',
    ]),
  },
  methods: mapActions('bookmarksStore', [
    'toPreviousMoviesPage',
    'toNextMoviesPage',
    'toggleMovie',
  ]),
};

</script>
