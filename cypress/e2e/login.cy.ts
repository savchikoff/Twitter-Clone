/// <reference types="cypress" />

describe('SignIn test', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login/");
  });

  it("should login user", () => {
    cy.get('[data-cy="login-email"]').type("savchik.official@gmail.com");
    cy.get('[data-cy="login-password"]').type("123456789");
    cy.get('[data-cy="login-btn"]').click();
  });
})