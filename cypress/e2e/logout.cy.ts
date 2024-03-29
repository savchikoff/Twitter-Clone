/// <reference types="cypress" />

describe('LogOut test', () => {
	it('should login user', () => {
		cy.visit('http://localhost:5173/login/');
		cy.get('[data-cy="login-email"]').type('1960dynamo@gmail.com');
		cy.get('[data-cy="login-password"]').type('@Sashaluda221');
		cy.get('[data-cy="login-btn"]').click();
		cy.get('[data-cy="home-label"]').should('be.visible');
		cy.get('[data-cy="sidebar-burger"]').click();
		cy.get('[data-cy="logout-btn"]').click({ force: true });
		cy.get('[data-cy="onboarding-buttons"]').should('be.visible');
	});
});
