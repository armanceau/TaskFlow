<script setup>
import { useUtilisateurStore } from '../stores/utilisateurStore';

const userStore = useUtilisateurStore();
const userInfo = userStore.user;

console.log(userInfo)
</script>	

<template>
	<div class="h-100 w-100 d-flex align-items-center justify-content-center gap-5 flex-column">
		<div class="d-flex align-items-center gap-4">
			<img class="logo" src="../assets/logo.jpeg" alt="Task Flow">
			<h1>
				Task Flow
			</h1>
		</div>
		<h5 class="w-70 text-center bg-secondary-custom p-4 br-1">
			<div v-if="userInfo">
				Content de te revoir {{ userInfo }} 👋
			</div>
			<div v-else>
				<b>Organisez</b> vos projets, <b>collaborez</b> facilement, et <b>boostez</b> votre productivité avec TaskFlow – la plateforme intuitive pour gérer vos équipes et vos tâches en toute simplicité. 
			</div>
		</h5>
		<div>
			<a href="/projets" class="btn btn-lg btn-outline-dark d-flex align-items-center gap-3">
				Accéder à la liste des projets 
				<i class="bi bi-arrow-up-right-circle"></i>
			</a>
		</div>
	</div>
</template>
