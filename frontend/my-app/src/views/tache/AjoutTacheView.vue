<script setup>
import { ref } from 'vue';
import { addTache } from '../../services/tacheService';
import { useRoute } from 'vue-router';

const route = useRoute();
const projectId = route.params.id;

const nom = ref('');
const description = ref('');
const _id = ref('');
const createur = ref('');
const utilisateurAssigne = ref('');
const message = ref(''); 
const erreur = ref('');
const urlProjet = ref('');

const ajouterTache = async () => {
    try {
        urlProjet.value = `/projet/${projectId}`;
        await addTache(_id, projectId, nom, description, createur, utilisateurAssigne);
        message.value = 'Tâche ajoutée avec succès !'; 
        erreur.value = ''; 
    } catch (err) {
        erreur.value = err.message;
        message.value = ''; 
    }
}

</script>

<template>
    <div class="card">
        <h2>Ajouter un projet </h2>
        <form @submit.prevent="ajouterTache">
            <div>
                <label for="nom">Nom :</label>
                <input v-model="nom" type="text" id="nom" required />
            </div>
            <div>
                <label for="createur">Créateur :</label>
                <input v-model="createur" type="text" id="createur" required />
            </div>
            <div>
                <label for="utilisateurAssigne">Utilisateur assigné :</label>
                <input v-model="utilisateurAssigne" type="text" id="utilisateurAssigne" />
            </div>
            <div>
                <label for="description">Description :</label>
                <input v-model="description" type="text" id="description" required />
            </div>
            <div>
                <label for="id">ID :</label>
                <input v-model="_id" type="text" id="id" required />
            </div>
            <button type="submit">Ajouter</button>
            </form>

            <div v-if="erreur">
                <p class="error">Erreur : {{ erreur }}</p>
            </div>

            <div v-if="message">
                <p class="success">{{ message }}</p>
                <a href="/projets">Retourner à la liste des projets</a>
                <a :href="urlProjet">Voir le projet</a>
            </div>
        </div>
</template>
