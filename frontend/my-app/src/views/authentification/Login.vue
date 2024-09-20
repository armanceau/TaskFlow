<template>
    <div class="w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="d-flex w-50 h-80 p-5 border align-items-center flex-column br-1 shadow-sm">
            <h2>Connexion</h2>
            <form @submit.prevent="login" class="d-flex flex-column align-items-center gap-3 mt-2">
                <div class="d-flex flex-column align-items-center gap-1">
                    <label for="username">Nom d'utilisateur :</label>
                    <input v-model="username" id="username" type="text" required />
                </div>
                <div class="d-flex flex-column align-items-center gap-1">
                    <label for="password">Mot de passe :</label>
                    <input v-model="password" id="password" type="password" required />
                </div>
                <button type="submit" class="btn btn-outline-dark">
                    Se connecter
                    <i class="bi bi-box-arrow-in-right"></i>
                </button>
            </form>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <a href="/register" class="mt-3">Je n'ai pas encore de compte</a>
        </div>
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
  