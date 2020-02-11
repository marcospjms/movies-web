<template>
  <div class="app-container">
    <main-menu></main-menu>
    <router-view/>
  </div>
</template>

<script>

import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'App',
  components: {
    MainMenu,
  },
};

</script>

<style lang="scss">
  $fa-font-path : "~font-awesome/fonts" !default;
  @import "~font-awesome/scss/font-awesome";
  body {
    background-color: #313030;
    color: white;
    font-family: Roboto, Helvetica, Arial, sans-serif;;
  }
  .app-container {
    max-width: 900px;
    margin: auto;
  }
</style>
