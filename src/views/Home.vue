<template>
  <div class="home">
    <list-all-movies title="Filmes mais bem avaliados no IMDB"/>
  </div>
</template>

<script>

import ListAllMovies from '@/components/ListAllMovies.vue';

export default {
  name: 'Home',
  components: {
    ListAllMovies,
  },
};
</script>
