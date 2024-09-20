<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      username: '', // Déclare username ici
      user: {},
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchProfil();
  },
  methods: {
    async fetchProfil() {
      const token = localStorage.getItem('authToken');
      console.log('mon token: ' + token);
      if (!token) {
        this.$router.push({ name: 'Login' });
        return;
      }

      try {
        console.log('je rentre dans le try');
        const response = await fetch('http://localhost:3000/profil', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          this.$router.push({ name: 'Login' });
        } else if (!response.ok) {
          throw new Error('Erreur lors de la récupération du profil');
        }
        const data = await response.json();
        this.username = data.username; // Utilise this.username

      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <div class="profil">
    <h1>Profil de l'utilisateur</h1>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <p><strong>Nom d'utilisateur :</strong> {{ username }}</p>
      <!-- Ajoute d'autres champs si nécessaire -->
    </div>
  </div>
</template>

<style scoped>
.profil {
  padding: 20px;
}
</style>
