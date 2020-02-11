<template>
  <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/bookmarks">Favoritos</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
};
</script>

<style scoped lang="scss">

nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
