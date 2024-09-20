<template>
    <div class="logout">
      <h2>Déconnexion</h2>
      <p>Vous avez été déconnecté avec succès. Redirection vers la page de connexion...</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const logout = () => {
    // Supprimer le token d'authentification du localStorage
    localStorage.removeItem('authToken');
  
    // Rediriger vers la page de connexion après une courte pause
    setTimeout(() => {
      router.push({ name: 'Login' });
    }, 1500);
  };
  
  onMounted(() => {
    logout(); // Exécuter la fonction logout lorsque la vue est montée
  });
  </script>
  
  <style scoped>
  .logout {
    text-align: center;
    margin-top: 50px;
  }
  
  h2 {
    color: #2c3e50;
  }
  
  p {
    color: #34495e;
  }
  </style>
  