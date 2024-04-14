/// <reference types="cypress" />

describe('SignIn test', () => {
	it('should login user', () => {
		cy.visit('http://localhost:5173/login/');
		cy.get('[data-cy="login-email"]').type('x66pzyqgqpr@gmail.com');
		cy.get('[data-cy="login-password"]').type('@Modsen123Test');
		cy.get('[data-cy="login-btn"]').click();
		cy.get('[data-cy="home-label"]').should('be.visible');
	});
});
