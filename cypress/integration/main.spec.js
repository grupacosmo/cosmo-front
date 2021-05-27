describe('Main Page', () => {
  it('Work properly', () => {
    cy.visit('/')

    cy.contains('Dołącz do nas').click()

    cy.url().should('include', '#dolacz')

    cy.get('[data-cy=nav-item]').contains('Kontakt').click()

    cy.url().should('include', '#kontakt')

    cy.get('input[name="email"]')
      .type('nme@gmail.com')
      .should('have.value', 'nme@gmail.com')

    cy.get('[data-cy=form]').submit()
  })
})
