/// <reference types="cypress" />

describe('SignUp test', () => {
    it("should signUp user", () => {
        cy.visit("http://localhost:5173/register/");
        cy.get('[data-cy="signup-name"]').type("Danik");
        cy.get('[data-cy="signup-phone"]').type("+375291234567");
        cy.get('[data-cy="signup-email"]').type("test@yahoo.com");
        cy.get('[data-cy="signup-password"]').type("@Modsen123Test");
        cy.get('[data-cy="month-select"]').click();
        cy.get('[data-cy="January"]').click();
        cy.get('[data-cy="year-select"]').click();
        cy.get('[data-cy="2024"]').click();
        cy.get('[data-cy="day-select"]').click();
        cy.get('[data-cy="11"]').click();
        cy.get('[data-cy="signup-btn"]').click();
        cy.get('[data-cy="home-label"]').should('be.visible');
    });
})