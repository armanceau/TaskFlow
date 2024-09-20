<script setup>
import Nav from '../../components/Nav.vue';
import { ref, onMounted } from 'vue';
import { fetchProfil } from '../../services/utilisateurService';
import { useRouter } from 'vue-router';

const username = ref('');
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    const { username: fetchedUsername, loading: fetchedLoading, error: fetchedError } = await fetchProfil();
    username.value = fetchedUsername;
    loading.value = fetchedLoading;
    error.value = fetchedError;

    if (fetchedError) {
        const router = useRouter();
        router.push({ name: 'Login' });
    }
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
                    <h2>Profil utilisateur</h2>
                </div>

                <div class="text-muted my-1">Informations personnelles</div>
                <div v-if="loading">Chargement...</div>
                <div v-else-if="error">{{ error }}</div>
                <div v-else class="d-flex flex-column gap-3">
                    <div class="border p-2 rounded">
                        <i class="bi bi-person"></i> Nom d'utilisateur : {{ username }}
                    </div>
                    <div class="border p-2 rounded">
                        <i class="bi bi-envelope-at"></i> Adresse e-mail : {{ username }}
                    </div>
                    <div class="border p-2 rounded">
                        <i class="bi bi-person-vcard"></i> Nom : {{ username }}
                    </div>
                    <div class="border p-2 rounded">
                        <i class="bi bi-person-vcard"></i> Prénom : {{ username }}
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
