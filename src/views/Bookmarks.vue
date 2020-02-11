<template>
  <div class="home">
    <list-all-movies :movies="movies"
                     :bookmarks="movies"
                     :loading="loading"
                     :hasPreviousPage="hasPreviousPage"
                     :hasNextPage="hasNextPage"
                     :title="'Bookmarks'"
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
    ...mapState('Bookmarks', [
      'movies',
      'loading',
      'currentPage',
      'totalPages',
    ]),
    ...mapGetters('Bookmarks', [
      'hasPreviousPage',
      'hasNextPage',
    ]),
  },
  methods: {
    ...mapActions('Bookmarks', [
      'toPreviousMoviesPage',
      'toNextMoviesPage',
      'toggleBookmark',
    ]),
  },
};

</script>
