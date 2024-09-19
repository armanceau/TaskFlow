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
    {{ nom }} | {{ _id }} {{ description }} {{ dateCreation }} {{ createur }} {{ utilisateurAssigne }}
    <button @click="handleDelete">Supprimer la tache</button>
</template>
