<script setup>
import { ref, onMounted } from 'vue';
import { fetchProjets } from '../../services/projetService';
import Nav from '../../components/Nav.vue';
import ProjetItem from '../../components/projet/ProjetItem.vue';

const projets = ref([]);

onMounted(async () => {
projets.value = await fetchProjets();
});

</script>

<template>
<div class="d-flex h-100">
	<div class="w-20 h-100 p-5 br-1">
		<Nav></Nav>
	</div>
	<div class="w-80 h-100 py-5 pr-4">
		<div class="d-flex flex-column align-items-start w-100 h-100 border shadow-sm gap-2 br-1 w-100 px-4">
			<div class="d-flex w-100 flex-start align-items-center justify-content-between mt-4">
				<h2>Liste des Projets</h2>
				<a href="/add-projet" class="btn btn-outline-dark d-flex align-items-center gap-2">
					Nouveau projet
					<i class="bi bi-plus-circle"></i>
				</a>
			</div>

			<div class="text-muted">
				Projets actifs
			</div>

			<div v-if="projets.length > 0" v-for="(projet, index) in projets" :key="index" class="w-100">
				<ProjetItem
					:nom="projet.nom"
					:_id="projet._id"
					:description="projet.description"
					:dateCreation="projet.dateCreation"
				/>		
			</div>

			<div v-else>
				<p>Oups ! Aucun projet en cours</p>
				<a href="/add-projet">Créer un nouveau projet</a>
			</div>
		</div>
	</div>
</div>
</template>
