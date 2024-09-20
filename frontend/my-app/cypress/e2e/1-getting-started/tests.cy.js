/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Affichage app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Devrait afficher la page d\'accueil correctement', () => {
    cy.title().should('include', 'Task Flow')
    cy.contains('Organisez vos projets, collaborez facilement, et boostez votre productivité avec TaskFlow – la plateforme intuitive pour gérer vos équipes et vos tâches en toute simplicité. ')
  })
  it('Devrait afficher un bouton de redirection vers les projets', () => {
    cy.get('a').contains('Accéder à la liste des projets').should('have.attr', 'href', '/projets');
  })
});

describe('Affichage login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
  })

  it('Devrait afficher la page de login', () => {
    cy.title().should('include', 'Task Flow')
    cy.contains('Connexion')
  })
  it('Devrait contenir tous les composants de la page login', () => {
    cy.get('input[id="username"]').should('be.visible'); 
    cy.get('input[id="password"]').should('be.visible');
    cy.get('button').contains('Se connecter').should('be.visible'); 
    cy.get('a').contains("Je n'ai pas encore de compte").should('have.attr', 'href', '/register');
  })
});

describe('Affichage register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register')
  })

  it('Devrait afficher la page de register', () => {
    cy.title().should('include', 'Task Flow')
    cy.contains('Inscription')
  })
  it('Devrait contenir tous les composants de la page register', () => {
    cy.get('input[id="username"]').should('be.visible'); 
    cy.get('input[id="password"]').should('be.visible');
    cy.get('input[id="confirmPassword"]').should('be.visible');
    cy.get('input[id="username"]').should('have.attr', 'required');
    cy.get('input[id="password"]').should('have.attr', 'required');
    cy.get('input[id="confirmPassword"]').should('have.attr', 'required');
    cy.get('button').contains('S\'inscrire').should('be.visible'); 
    cy.get('a').contains("J'ai déjà un compte").should('have.attr', 'href', '/login');
  })
})

