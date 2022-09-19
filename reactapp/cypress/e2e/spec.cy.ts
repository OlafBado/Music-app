import cypress from "cypress"

describe('music', { scrollBehavior: false }, () => {
  it('like functionality', () => {
    cy.visit('http://localhost:3000')
    cy.findByPlaceholderText(/search albums/i).type('rock', { force: true })
    cy.findByRole('row', { name: /the mars volta the mars volta rock/i }).children('.td-svg').click()
    cy.findByRole('button', {  name: /favourites/i}).click()
    cy.findAllByRole('row').should('have.length', 2)
    cy.findByRole('row', { name: /the mars volta the mars volta rock/i }).children('.td-svg').click()
    cy.findAllByRole('row').should('have.length', 0)
    cy.findByRole('button', {  name: /favourites/i}).click()
    cy.findByPlaceholderText(/search albums/i).clear()
    cy.findAllByRole('row').should('have.length.greaterThan', 2)
  })
})