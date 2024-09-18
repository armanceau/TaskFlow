<script setup>
import ProjetList from './components/ProjetList.vue';
import Projet from './components/Projet.vue';
</script>

<template>
  <ProjetList></ProjetList>
  <Projet></Projet>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
