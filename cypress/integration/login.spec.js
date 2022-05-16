beforeEach(() => {
  cy.visit("/");
});

it("The main page should be visible", () => {
  cy.contains("Books list");
});

it("Should successfully login", () => {
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать").should("be.visible");
});

it("Should not login with empty login", () => {
  cy.contains("Log in").click();
  cy.get("#mail").type(" ");
  cy.get("#pass").type("test");
  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should not login with empty password", () => {
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});
