import { createRouter, createWebHistory } from 'vue-router';
import ProjetView from '../views/projet/ProjetView.vue';
import ProjetListeView from '../views/projet/ProjetListeView.vue';
import DefaultView from '../views/DefaultView.vue';
import AjoutProjetView from '../views/projet/AjoutProjetView.vue';
import AjoutTacheView from '../views/tache/AjoutTacheView.vue';
import ParametreView from '../views/ParametreView.vue';
import Login from '../views/authentification/Login.vue';
import Logout from '../views/authentification/Logout.vue';
import Register from '../views/authentification/Register.vue';

function isAuthenticated() {
    return !!localStorage.getItem('authToken'); // Retourne true si le token existe
}

const routes = [
    {
        path: '/',
        name: 'DefaultView',
        component: DefaultView
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/projet/:id',
        name: 'ProjetView',
        component: ProjetView,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
                next({ name: 'Login' }); 
            } else {
                next();
            }
        }
    },
    {
        path: '/projets',
        name: 'ProjetListeView',
        component: ProjetListeView,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
                next({ name: 'Login' }); 
            } else {
                next();
            }
        }
    },
    {
        path: '/add-projet',
        name: 'AjoutProjetView',
        component: AjoutProjetView,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
                next({ name: 'Login' }); 
            } else {
                next();
            }
        }
    },
    {
        path: '/projet/:id/add-tache',
        name: 'AjoutTacheView',
        component: AjoutTacheView,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
                next({ name: 'Login' }); 
            } else {
                next();
            }
        }
    },
    {
        path: '/parametre',
        name: 'ParametreView',
        component: ParametreView,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
                next({ name: 'Login' }); 
            } else {
                next();
            }
        }
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
                next({ name: 'Login' }); 
            } else {
                next();
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;