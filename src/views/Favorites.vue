<template>
  <div class="favorites-container">
    <list-all-movies title="Filmes favoritos"></list-all-movies>
  </div>
</template>


<script>

import ListAllMovies from '@/components/ListAllMovies.vue';

export default {
  name: 'Favorites',
  components: {
    ListAllMovies,
  },
};
</script>
