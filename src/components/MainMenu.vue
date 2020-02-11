<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/bookmarks">Bookmarks</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
};
</script>

<style scoped lang="scss">

@import '../assets/styles/variables';

nav {
  padding: 30px;
  text-align: center;
  a {
    margin: 0px 10px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    border-bottom: 2.5px solid white;

    &.router-link-exact-active {
      border-bottom-color: $active-menu-color;
    }
  }
}

</style>
