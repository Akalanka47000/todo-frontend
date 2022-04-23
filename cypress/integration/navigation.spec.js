/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check redirection to login if not signed in', () => {
    if (!localStorage.getItem('rememberMe') && !sessionStorage.getItem('loggedIn')) {
      cy.wait(1500)
      cy.location('pathname').should('include', '/login')
    }
  })
})
