import { createRouter, createWebHistory } from 'vue-router';
import ProjetView from '../views/ProjetView.vue';
import ProjetListeView from '../views/ProjetListeView.vue';
import DefaultView from '../views/DefaultView.vue';
import AjoutProjetView from '../views/AjoutProjetView.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;