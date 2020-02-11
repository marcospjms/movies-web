<template>
  <div class="details">
    <movie-details v-if="selectedMovie"
                   :movie="selectedMovie"
                   :bookmarks="bookmarks"
                   :loading="loadingSelectedMovie"
                   @toggleMovie="toggleMovie"
    />
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import MovieDetails from '../components/MovieDetails.vue';

export default {
  name: 'Details',
  components: {
    MovieDetails,
  },
  computed: {
    ...mapState('TopRatedMovies', [
      'selectedMovie',
      'loadingSelectedMovie',
    ]),
    ...mapState('Bookmarks', {
      bookmarks: (state) => state.allMovies,
    }),
  },
  methods: {
    ...mapActions('TopRatedMovies', [
      'selectMovie',
    ]),
    ...mapActions('Bookmarks', [
      'toggleMovie',
    ]),
  },
  created() {
    console.log(this.$route.params.id, this.selectMovie);
    this.selectMovie(this.$route.params.id);
  },
};

</script>
