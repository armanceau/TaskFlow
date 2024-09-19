<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProjet, deleteProjet } from '../../services/projetService';
import { fetchTachesProjet } from '../../services/tacheService';
import TacheList from '../../components/tache/TacheList.vue';

const route = useRoute();
const project = ref(null);
const taches = ref([])
const projectId = route.params.id;
const confirmationName = ref(''); 
const isDeleting = ref(false);

onMounted(async () => {
if (projectId) {
    project.value = await fetchProjet(projectId);
    taches.value = await fetchTachesProjet(projectId);

    console.log('taches.value : '+ taches.value)
}
});

const handleDelete = async () => {
    if (confirmationName.value === project.value.nom) {
        isDeleting.value = true;
        const result = await deleteProjet(projectId);
        if (result) {
            // Rediriger ou afficher un message de succès
            alert('Projet supprimé avec succès !');
            // Par exemple, redirection vers la liste des projets
            window.location.href = '/projets';
        } else {
            alert('Erreur lors de la suppression du projet.');
        }
        isDeleting.value = false;
    } else {
        alert('Le nom du projet ne correspond pas.');
    }
}

</script>

<template>
    <div>
        <h2>Détails du Projet</h2>

        <div>
            <label for="confirm-name">Confirmer le nom du projet pour suppression :</label>
            <input v-model="confirmationName" type="text" id="confirm-name" />
        </div>
        <button @click="handleDelete" :disabled="isDeleting">Supprimer le projet</button>
        
        <TacheList/>
        
        <div v-if="project">
            <p><strong>ID:</strong> {{ project._id }}</p>
            <p><strong>Nom:</strong> {{ project.nom }}</p>
            <p><strong>Description:</strong> {{ project.description }}</p>
        </div>
        <p v-else>Chargement...</p>
    </div>
</template>
