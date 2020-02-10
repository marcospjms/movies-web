<template>
  <div class="favorites-container">
    <list-movies title="Filmes favoritos"></list-movies>
  </div>
</template>


<script>

import ListMovies from '@/components/ListMovies.vue';

export default {
  name: 'Favorites',
  components: {
    ListMovies,
  },
};
</script>
