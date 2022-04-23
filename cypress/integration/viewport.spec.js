/// <reference types="cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check app visibility on different viewports', () => {

    const waitTime = 3000

    cy.viewport('macbook-15')
    cy.wait(waitTime)
    cy.viewport('macbook-13')
    cy.wait(waitTime)
    cy.viewport('macbook-11')
    cy.wait(waitTime)
    cy.viewport('ipad-2')
    cy.wait(waitTime)
    cy.viewport('ipad-mini')
    cy.wait(waitTime)
    cy.viewport('iphone-6+')
    cy.wait(waitTime)
    cy.viewport('iphone-6')
    cy.wait(waitTime)
    cy.viewport('iphone-5')
    cy.wait(waitTime)
    cy.viewport('iphone-4')
    cy.wait(waitTime)
    cy.viewport('iphone-3')
    cy.wait(waitTime)

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait')
    cy.wait(waitTime)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(waitTime)

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  })
})
