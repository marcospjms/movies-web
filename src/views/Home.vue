<template>
  <div class="home">
    <list-movies title="Todos filmes"/>
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
