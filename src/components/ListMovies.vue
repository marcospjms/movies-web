<template>
  <div class="container-films">
    <h1>{{ title }}</h1>
    <div>
      Listar aqui
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListFilms',
  props: {
    title: {
      type: String,
      default: 'Filmes',
    },
  },
};
</script>

<style scoped lang="scss">
</style>
