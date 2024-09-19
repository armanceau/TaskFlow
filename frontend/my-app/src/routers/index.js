import { createRouter, createWebHistory } from 'vue-router';
import ProjetView from '../views/projet/ProjetView.vue';
import ProjetListeView from '../views/projet/ProjetListeView.vue';
import DefaultView from '../views/DefaultView.vue';
import AjoutProjetView from '../views/projet/AjoutProjetView.vue';
import AjoutTacheView from '../views/tache/AjoutTacheView.vue';

const routes = [
    {
        path: '/',
        name: 'DefaultView',
        component: DefaultView
    },
    {
        path: '/projet/:id',
        name: 'ProjetView',
        component: ProjetView
    },
    {
        path: '/projets',
        name: 'ProjetListeView',
        component: ProjetListeView
    },
    {
        path: '/add-projet',
        name: 'AjoutProjetView',
        component: AjoutProjetView
    },
    {
        path: '/projet/:id/add-tache',
        name: 'AjoutTacheView',
        component: AjoutTacheView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;