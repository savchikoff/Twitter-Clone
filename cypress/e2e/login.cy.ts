/// <reference types="cypress" />

describe('SignIn test', () => {
  it("should login user", () => {
    cy.visit("http://localhost:5173/login/");
    cy.get('[data-cy="login-email"]').type("1960dynamo@gmail.com");
    cy.get('[data-cy="login-password"]').type("@Sashaluda221");
    cy.get('[data-cy="login-btn"]').click();
    cy.get('[data-cy="home-label"]').should('be.visible');
  });
})