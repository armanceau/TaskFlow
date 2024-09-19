<template>
    <div class="w-100 h-100 bg-white shadow-sm br-1 d-flex align-items-center flex-column justify-content-start gap-2 border">
        <div class="d-flex align-items-center justify-content-center gap-2 w-100 mt-4">
            <img class="logo-sm" src="../assets/logo.jpeg" alt="Task Flow">
            <h5 class="m-0">Task Flow</h5>
        </div>
        <div class="ml-1 text-left w-90 text-muted fz-075 mt-3">Menu</div>
        <div :class="['nav-card w-90 d-flex justify-content-start br-1', { 'bg-dark text-white': isActive('/') }, { 'text-dark border': !isActive('/') }]">
            <a href="/" :class="['ml-1 p-2 w-100 text-decoration-none d-flex align-items-center justify-content-start gap-2 text-dark', { 'text-white': isActive('/') }, ]">
                <i class="bi bi-house"></i> Accueil
            </a>
        </div>
        <div :class="['nav-card w-90 d-flex justify-content-start br-1', { 'bg-dark text-white': isActive('/projets') }, { 'text-dark border': !isActive('/projets') }]">
            <a href="/projets" :class="['ml-1 p-2 w-100 text-decoration-none d-flex align-items-center justify-content-start gap-2 text-dark', { 'text-white': isActive('/projets') }]">
                <i class="bi bi-folder"></i> Projets
            </a>
        </div>
        <div :class="['nav-card w-90 d-flex justify-content-start br-1', { 'bg-dark text-white': isActive('/#') }, { 'text-dark border': !isActive('/#') }]">
            <a href="/#" class="ml-1 p-2 w-100 text-decoration-none d-flex align-items-center justify-content-start gap-2 text-dark">
                Liste déroulante projet
            </a>
        </div>
        <div class="ml-1 text-left w-90 text-muted fz-075 mt-3">Profil</div>
        <div :class="['nav-card w-90 d-flex justify-content-start br-1', { 'bg-dark text-white': isActive('/profil') }, { 'text-dark border': !isActive('/profil') }]">
            <a href="/profil" class="ml-1 p-2 w-100 text-decoration-none d-flex align-items-center justify-content-start gap-2 text-dark">
                <i class="bi bi-person"></i> Profil
            </a>
        </div>
        <div :class="['nav-card w-90 d-flex justify-content-start br-1', { 'bg-dark text-white': isActive('/parametre') },{ 'text-dark border': !isActive('/parametre') }]">
            <a href="/parametre" class="ml-1 p-2 w-100 text-decoration-none d-flex align-items-center justify-content-start gap-2 text-dark">
                <i class="bi bi-gear"></i> Paramètre
            </a>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => {
    return route.path === path;
};
</script>

<style>
a{
    text-decoration: none;   
}

.nav-card{
    transition: .3s;
}
.nav-card:hover{
    background-color: rgb(241, 241, 241);
}
</style>
