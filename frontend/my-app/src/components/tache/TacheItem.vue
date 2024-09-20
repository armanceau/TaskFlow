<script>
import { deleteTache } from '../../services/tacheService';
export default {
    props: {
        nom: String,
        _id: Number,
        description: String,
        dateCreation: String,
        createur: String,
        utilisateurAssigne: String,
        projectId: String
    },
    methods: {
        async handleDelete() {
            console.log('je suis appelé');
            const result = await deleteTache(this._id, this.projectId);
            if (result) {
                // Rediriger ou afficher un message de succès
                alert('Tâche supprimée avec succès !');
                // Par exemple, recharger la liste des tâches
                this.$emit('task-deleted'); // Emit an event to notify parent component
            } else {
                alert('Erreur lors de la suppression de la tâche.');
            }
        }
    }
    
};
</script>

<template>
    <div class="w-100 d-flex flex-column border p-3 br-1 gap-2">
        <div class="d-flex justify-content-between rounded text-dark">
            <div class="d-flex align-items-center gap-2">
                <div>
                    {{ nom }} 
                </div>
                <div class="border rounded p-1">
                    <i class="bi bi-person"></i> {{ createur }}
                </div>
            </div>
            <div class="d-flex align-item-center gap-2">
                <div v-if="utilisateurAssigne" class="bg-secondary-custom-05 p-1 rounded shadow-sm">
                    <i class="bi bi-person"></i> {{ utilisateurAssigne }}
                </div>
                <div class="bg-secondary-custom-05 p-1 rounded shadow-sm">
                    <i class="bi bi-calendar"></i> {{ dateCreation }}
                </div>
            </div>
            
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <div>
                {{ description }}
            </div>
            <div>
                <button @click="handleDelete" class="btn btn-outline-danger btn-sm">
                    Supprimer
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
</template>
