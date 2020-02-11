<template>
  <div class="home">
    <list-all-movies :movies="movies"
                     :bookmarks="bookmarks"
                     :loading="loading"
                     :hasPreviousPage="hasPreviousPage"
                     :hasNextPage="hasNextPage"
                     :title="'Top Rated Movies'"
                     :currentPage="currentPage"
                     :totalPages="totalPages"
                     @toPreviousMoviesPage="toPreviousMoviesPage"
                     @toNextMoviesPage="toNextMoviesPage"
                     @toggleBookmark="toggleBookmark"/>
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
      'currentPage',
      'totalPages',
    ]),
    ...mapGetters('TopRatedMovies', [
      'hasPreviousPage',
      'hasNextPage',
    ]),
    ...mapState('Bookmarks', {
      bookmarks: (state) => state.allMovies,
    }),
  },
  methods: {
    ...mapActions('TopRatedMovies', [
      'toPreviousMoviesPage',
      'toNextMoviesPage',
    ]),
    ...mapActions('Bookmarks', [
      'toggleBookmark',
    ]),
  },
};
</script>
