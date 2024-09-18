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

	<a href="/add-projet">Créer un nouveau projet</a>

	<ul v-if="projets.length > 0">
		<li v-for="(projet, index) in projets" :key="index">
			{{ projet.nom }} | {{ projet._id }} {{ projet.description }} {{ projet.dateCreation }} <a :href="`/projet/${projet._id}`" class="btn btn-primary mb-3">Voir le projet</a>
		</li>
	</ul>
</div>
</template>
