import { defineStore } from 'pinia';

export const useUtilisateurStore = defineStore('user', {
  state: () => ({
    user: null, 
    token: null, 
  }),
  actions: {
    setUser(userData) {
        this.user = userData;
    },
    setToken(token) {
    this.token = token;
    },
    clearUser() {
        this.user = null;
        this.token = null;
    },
  },
});