<template>
  <div class="home">
    <list-movies title="Filmes mais bem avaliados no IMDB"/>
  </div>
</template>

<script>

import ListMovies from '@/components/ListMovies.vue';

export default {
  name: 'Home',
  components: {
    ListMovies,
  },
};
</script>
