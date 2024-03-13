/// <reference types="cypress" />

describe('SignIn test', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login/");
  });

  it("should login user", () => {
    cy.get('[data-cy="login-email"]').type("test@mail.ru");
    cy.get('[data-cy="login-password"]').type("@Modsen123");
    cy.get('[data-cy="login-btn"]').click();
    cy.get('[data-cy="home-label"]').should('be.visible');
  });
})