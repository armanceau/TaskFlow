<template>
    <div class="login-form">
      <h2>Connexion</h2>
      <a href="/register">Inscription</a>
      <form @submit.prevent="login">
        <div>
          <label for="username">Nom d'utilisateur</label>
          <input v-model="username" id="username" type="text" required />
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input v-model="password" id="password" type="password" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUtilisateurStore } from '../../stores/utilisateurStore';
  
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  const userStore = useUtilisateurStore();
  
  const login = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      });
  
      if (!response.ok) {
        throw new Error('Identifiants incorrects');
      }
  
      const data = await response.json();
      localStorage.setItem('authToken', data.token);

      userStore.setUser(username.value); 
      userStore.setToken(data.token);
  
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
  