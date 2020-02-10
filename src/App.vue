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
