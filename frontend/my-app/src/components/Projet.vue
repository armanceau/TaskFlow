<script setup>
import { ref, onMounted } from 'vue';
import { fetchProjet } from '../services/projetService';

const project = ref(null);  // Utilisation d'une seule variable pour un seul projet
const projectId = 1;  // Remplace par l'ID réel que tu souhaites récupérer

onMounted(async () => {
  project.value = await fetchProjet(projectId);
  console.log(project.value);
});
</script>

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
