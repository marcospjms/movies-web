<template>
  <div class="container-movie">
    <template v-if="!loading">
      <router-link :to="'/movies/' + movie.id">
        <img :src="imageSrc" />
      </router-link>

      <i :class="{ selected: isBookmark }"
         :title="bookMarkTitle"
         @click="toggleBookmark()"
         class="fa fa-bookmark bookmark-icon"></i>

      <i :class="{ watched: isWatchedMovie }"
         :title="watchedTitle"
         @click="toggleWatchedMovie"
         class="fa fa-check watched-movie-icon">
      </i>

      <div class="movie-info">
        <div class="vote-container">
          <i class="fa fa-star"></i>
          <span class="vote">
            {{ movie.voteAverage.toFixed(1) }}
          </span>
        </div>
        <router-link :to="'/movies/' + movie.id">
          <h2>
            {{ movie.title }}
          </h2>
        </router-link>
        <p>{{ movie.overview }}</p>
      </div>
    </template>

    <div v-if="loading" class="loading">
      Carregando filme...
    </div>
  </div>
</template>

<script>

import MovieMixin from '../mixins/movie';

export default {
  name: 'MovieDetails',
  mixins: [MovieMixin],
};
</script>

<style scoped lang="scss">

  @import '../assets/styles/icons';
  @import '../assets/styles/movie';
  @import '../assets/styles/loading';

  img {
    width: 100%;
    &:hover {
      opacity: 0.9;
    }
  }

</style>
