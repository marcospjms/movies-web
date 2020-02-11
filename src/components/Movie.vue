<template>
  <div class="container-film">
    <h2 @click="toggleMovie()">{{ movie.title }} ({{ movie.voteAverage }})</h2>
  </div>
</template>

<script>

export default {
  name: 'Movie',
  props: {
    movie: {
      type: Object,
      default() {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleMovie() {
      this.$emit('toggleMovie', this.movie);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
