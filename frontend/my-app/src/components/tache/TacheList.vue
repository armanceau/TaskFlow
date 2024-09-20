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
    <div class="overflow-auto w-100 d-flex flex-column gap-2">
        <div v-if="taches.length > 0" v-for="(tache, index) in taches" :key="index" class="w-100">
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
        </div>
    </div>
</template>
