/// <reference types="cypress" />

describe('Theme change test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/login/");
    });
    it("should change the theme", () => {
        cy.get('[data-cy="login-email"]').type("1960dynamo@gmail.com");
        cy.get('[data-cy="login-password"]').type("@Sashaluda221");
        cy.get('[data-cy="login-btn"]').click();
        cy.get('[data-cy="home-label"]').should('be.visible');
        cy.get('[data-cy="theme-toggle"]').click({ force: true });
        cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
})