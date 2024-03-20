/// <reference types="cypress" />

describe('Profile', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173/login');
	});
	it('Should render profile of user', () => {
		const email = '1960dynamo@gmail.com';
		cy.get('[data-cy="login-email"]').type(email);
		cy.get('[data-cy="login-password"]').type('@Sashaluda221');
		cy.get('[data-cy="login-btn"]').click();
		cy.wait(3000);
		cy.visit('http://localhost:5173/profile');
		cy.contains('fsdfsdfsf');
		cy.contains(`@${email.split('@')[0]}`);
	});
});
