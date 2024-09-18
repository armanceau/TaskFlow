<script setup>
import { ref, onMounted } from 'vue';
import { addProjet } from '../services/projetService';

const nom = ref('');
const description = ref('');
const _id = ref('');
const message = ref(''); 
const erreur = ref('');
const urlProjet = ref('');

const ajouterProjet = async () => {
    try {
        urlProjet.value = `/projet/${_id.value}`;
        await addProjet(nom, description, _id);
        message.value = 'Projet ajouté avec succès !'; 
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
        <form @submit.prevent="ajouterProjet">
            <div>
                <label for="nom">Nom :</label>
                <input v-model="nom" type="text" id="nom" required />
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
