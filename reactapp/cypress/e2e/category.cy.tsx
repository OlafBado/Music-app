describe('music-updated', { scrollBehavior: false }, () => {
    it('like functionality-updated', () => {
      cy.visit('http://localhost:3000')
      // filter by category
      cy.get('[data-testid="svgCategory"]').click()
      // expect button to appear
      cy.findByRole('button', { name: /reset/i }).should('be.visible')
      // find 2nd row
      const secondRow = cy.get('tbody>tr')
      // take first album result and type into the search bar
      secondRow.get('tr>td').eq(2).invoke('text').then((text) => {
        cy.findByPlaceholderText(/search albums/i).type(text, { force: true })
        cy.findAllByRole('row').should('have.length', 2)
      })
    })
  })