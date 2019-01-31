describe('My First Test', function() {
	it('Visit Nature.com', function() {

		cy.clearCookies()

		cy.visit('https://www.nature.com')

		cy.contains('Nature')

		cy.contains('Menu')

		cy.contains('Login')

		cy.contains('Search').click()

		// Should open a search bar which includes 'Article Search'
		cy.contains('Article search')

		cy.get('#keywords')
		  .type('Shrew').click()
		  .should('have.value', 'Shrew')

	})
})


