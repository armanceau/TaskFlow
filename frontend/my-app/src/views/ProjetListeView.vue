<script setup>
import { ref, onMounted } from 'vue';
import { fetchProjets } from '../services/projetService';
import Nav from '../components/Nav.vue';
import ProjetItem from '../components/ProjetItem.vue';

const projets = ref([]);

onMounted(async () => {
projets.value = await fetchProjets();
});

</script>

<template>
<div>
	<h2>Liste des Projets</h2>
	<Nav></Nav>

	<a href="/add-projet">Créer un nouveau projet</a>

	<ul v-if="projets.length > 0">
		<li v-for="(projet, index) in projets" :key="index">
			<ProjetItem
                :nom="projet.nom"
                :_id="projet._id"
                :description="projet.description"
                :dateCreation="projet.dateCreation"
            />		
		</li>
	</ul>
	<div v-else>
		<p>Oups ! Aucun projet disponible</p>
		<a href="/add-projet">Créer un nouveau projet</a>
	</div>
</div>
</template>
