<template>
  <div class="container-movie">
    <router-link :to="'/movies/' + movie.id">
      <img :src="imageSrc" />
    </router-link>
    <div class="movie-info">
      <div class="vote-container">
        <i class="fa fa-star"></i>
        <span class="vote">
          {{ movie.voteAverage.toFixed(1) }}
        </span>
      </div>
      <router-link :to="'/movies/' + movie.id">
        <h2>{{ movie.title }}</h2>
      </router-link>
    </div>
    <i :class="{ selected: isBookmark }"
       @click="toggleBookmark()"
       :title="bookMarkTitle"
       class="fa fa-bookmark bookmark-icon"></i>
  </div>
</template>

<script>

import MovieMixin from '../mixins/movie';

export default {
  name: 'Movie',
  mixins: [MovieMixin],
  computed: {
    imageSrc() {
      return `https://image.tmdb.org/t/p/w200/${this.movie.posterPath}`;
    },
  },
};
</script>

<style scoped lang="scss">

  @import '../assets/styles/icons';
  @import '../assets/styles/movie';

  .container-movie {
    width: 200px;
    margin: 10px 10px 10px 0;
  }

  img {
    height: 300px;
    width: 200px;
    &:hover {
      opacity: 0.9;
    }
  }

  .movie-info {
    height: 90px;
  }

</style>
