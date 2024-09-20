<script setup>
import { ref, onMounted } from 'vue';
import { addProjet } from '../../services/projetService';
import Nav from '../../components/Nav.vue';

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
    <div class="d-flex h-100">
        <div class="w-20 h-100 p-5 br-1">
            <Nav></Nav>
        </div>
        <div class="w-80 h-100 py-5 pr-4">
            <div class="d-flex flex-column align-items-start w-100 h-100 border shadow-sm gap-2 br-1 w-100 px-4">
                <div class="d-flex w-100 flex-start align-items-center justify-content-between mt-4">
                    <h2>Ajouter une tâche</h2>
                </div>

                <form @submit.prevent="ajouterProjet">
                    <div class="text-muted mt-3">Informations sur le projet</div>
                    <div class="d-flex flex-column gap-3">
                        <div class="border p-2 rounded d-flex justify-content-between gap-1">
                            <label for="nom">Nom :</label>
                            <input v-model="nom" type="text" id="nom" required />
                        </div>
                        <div class="border p-2 rounded d-flex justify-content-between gap-1">
                            <label for="description">Description :</label>
                            <input v-model="description" type="text" id="description" required />
                        </div>
                        <div class="border p-2 rounded d-flex justify-content-between gap-1">
                            <label for="id">ID :</label>
                            <input v-model="_id" type="number" id="id" required />
                        </div>
                    </div>

                    <div class="mt-3">
                        <button type="submit" class="btn btn-outline-dark">
                            Ajouter
                            <i class="bi bi-plus-circle"></i>
                        </button>
                    </div>
                </form>

                <div v-if="erreur">
                    <p class="error">Erreur : {{ erreur }}</p>
                </div>

                <div v-if="message">
                    <div class="text-success border border-success text-center p-2 rounded">{{ message }}</div>
                    <div class="d-flex align-items-center gap-3 mt-2">
                        <div>
                            <a href="/projets" class="btn btn-outline-dark">
                                <i class="bi bi-arrow-left-circle"></i>
                                Retourner à la liste des projets
                            </a>
                        </div>
                        <div>
                            <a :href="urlProjet" class="btn btn-outline-dark">
                                Voir le projet
                                <i class="bi bi-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>