/// <reference types="Cypress" />

describe('App content', () => {
  it('Has h1 containing Wibert Stur', () => {
    cy.visit('/')
    cy.contains('h1', 'Wibert Stur')
  })
})
