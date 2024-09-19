<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProjet, deleteProjet } from '../../services/projetService';
import { fetchTachesProjet } from '../../services/tacheService';
import TacheList from '../../components/tache/TacheList.vue';
import Nav from '../../components/Nav.vue';

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
<div class="d-flex h-100">
	<div class="w-20 h-100 p-5 br-1">
		<Nav></Nav>
	</div>
	<div class="w-80 h-100 py-5 pr-4">
        <div v-if="project" class="d-flex flex-column align-items-start w-100 h-100 border shadow-sm gap-2 br-1 w-100 px-4">
            <div class="d-flex w-100 flex-start align-items-start justify-content-between mt-4">
                <h2>{{ project.nom }}</h2>
                <div class="d-flex border border-danger flex-column br-1 p-3 gap-1">
                    <div class="d-flex flex-column gap-1">
                        <label for="confirm-name" class="text-danger">Confirmer le nom du projet pour suppression :</label>
                        <input v-model="confirmationName" type="text" id="confirm-name" class="border border-danger rounded p-1"/>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button @click="handleDelete" :disabled="isDeleting" class="btn btn-outline-danger">
                            Supprimer le projet
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
            <a :href="`/projet/${projectId}/add-tache`" class="btn btn-primary mb-3">Créer une nouvelle tâche</a>

            <TacheList/>

            <p><strong>ID:</strong> {{ project._id }}</p>
            <p><strong>Nom:</strong> {{ project.nom }}</p>
            <p><strong>Description:</strong> {{ project.description }}</p>
        </div>
        <p v-else>Chargement...</p>
	</div>
</div>
</template>