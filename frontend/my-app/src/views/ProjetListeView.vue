<script setup>
import { ref, onMounted } from 'vue';
import { fetchProjets } from '../services/projetService';

const projets = ref([]);

onMounted(async () => {
  projets.value = await fetchProjets();
});

</script>

<template>
  <div>
    <h2>Liste des Projets</h2>
    <ul v-if="projets.length > 0">
      <li v-for="(projet, index) in projets" :key="index">
        {{ projet.nom }} | {{ projet._id }}
      </li>
    </ul>
  </div>
</template>
