<script setup>
import { ref, onMounted } from 'vue';
import { fetchTachesProjet } from '../../services/tacheService';
import TacheItem from './TacheItem.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const projectId = route.params.id;
const taches = ref([])

onMounted(async () => {
  taches.value = await fetchTachesProjet(projectId);
});

const fetchTaches = async () => {
  taches.value = await fetchTachesProjet(projectId);
};

</script>

<template>
  <ul v-if="taches.length > 0">
		<li v-for="(tache, index) in taches" :key="index">
			<TacheItem
                :nom="tache.nom"
                :_id="tache._id"
                :description="tache.description"
                :dateCreation="tache.dateCreation"
                :createur="tache.createur"
                :utilisateurAssigne="tache.utilisateurAssigne"
                :projectId="projectId"
                @task-deleted="fetchTaches"
            />		
		</li>
	</ul>
</template>
