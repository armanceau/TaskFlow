<template>
    <div>
      <h2>Détails du Projet</h2>
      <div v-if="project">
        <p><strong>ID:</strong> {{ project._id }}</p>
        <p><strong>Nom:</strong> {{ project.nom }}</p>
        <p><strong>Description:</strong> {{ project.description }}</p>
      </div>
      <p v-else>Chargement...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchProjet } from '../services/projetService';
  
  const route = useRoute();
  const project = ref(null);
  
  const projectId = route.params.id;
  
  onMounted(async () => {
    if (projectId) {
      project.value = await fetchProjet(projectId);
    }
  });
  </script>
  