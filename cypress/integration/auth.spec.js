/// <reference types="cypress" />

context('Auth Requests', () => {
  it('Auth flow', () => {
    cy.visit('/register')

    const username = 'akalanka7'
    const email = 'akalanka@gmail.com'
    const password = '123'

    cy.get('#username').type(username).should('have.value', username)
    cy.get('#email').type(email).should('have.value', email)
    cy.get('#password').type(password).should('have.value', password)

    cy.request({
      method: 'POST',
      url: `${Cypress.env('server_url')}/auth/register`,
      body: {
        username,
        email,
        password,
      },
    }).then((response) => {
      assert.equal(response.status, 200)
      if (response.status === 200)
        cy.getCookie('token').should('have.property', 'value', response.body.token)
    })

    cy.visit('/login')

    cy.get('#username').type(username).should('have.value', username)
    cy.get('#password').type(password).should('have.value', password)

    cy.request({
      method: 'POST',
      url: `${Cypress.env('server_url')}/auth/login`,
      body: {
        username,
        password,
      },
    }).then((response) => {
      assert.equal(response.status, 200)
      if (response.status === 200)
        cy.getCookie('token').should('have.property', 'value', response.body.token)
    })

    cy.getCookie('token').then((res) => {
      cy.request({
        method: 'DELETE',
        url: `${Cypress.env('server_url')}/auth/user`,
        headers: {
          Authorization: `Bearer ${res.value}`,
        },
      }).then((response) => {
        assert.equal(response.status, 200)
      })
    })
  })
})
