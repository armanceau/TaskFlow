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
    // Visite la page principale de ton application
    cy.visit('http://localhost:5173')
  })

  it('Devrait afficher la page d\'accueil correctement', () => {
    cy.title().should('include', 'Task Flow')
    cy.contains('Organisez vos projets, collaborez facilement, et boostez votre productivité avec TaskFlow – la plateforme intuitive pour gérer vos équipes et vos tâches en toute simplicité. ')
  })
  it('Devrait afficher un bouton de redirection vers les projets', () => {
    cy.get('a').contains('Accéder à la liste des projets').should('have.attr', 'href', '/projets');
  })
})
