<template>
    <div class="register-form">
      <h2>Inscription</h2>
      <form @submit.prevent="register">
        <div>
          <label for="username">Nom d'utilisateur</label>
          <input v-model="username" id="username" type="text" required />
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input v-model="password" id="password" type="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirmer le mot de passe</label>
          <input v-model="confirmPassword" id="confirmPassword" type="password" required />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const register = async () => {
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Les mots de passe ne correspondent pas.';
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur lors de l’inscription.');
      }
  
      const data = await response.json();
      localStorage.setItem('authToken', data.token); 
  
      router.push('/'); 
    } catch (error) {
      errorMessage.value = error.message;
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  