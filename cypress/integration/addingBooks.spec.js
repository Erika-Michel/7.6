beforeEach(() => {
  cy.visit("/");
  cy.login("test@test.com", "test");
});

it("Should add book", () => {
  cy.addBook(
    "War and Peace",
    "a literary work mixed with chapters on history and philosophy",
    "Leo Tolstoy"
  );
  cy.contains("Submit").click();
  cy.contains("Leo Tolstoy").should("be.visible");
});

it("Should add favourite book to books", () => {
  cy.addBook(
    "The Brothers Karamazov",
    "a passionate philosophical novel that enters deeply into questions of God, free will, and morality",
    "Fyodor Dostoevsky"
  );
  cy.get("#favorite").click();
  cy.contains("Submit").click();
  cy.contains("Fyodor Dostoevsky").should("be.visible");
});

it("Should delete favourite book", () => {
  cy.addBook(
    "Three Comrades",
    "written in first person by the main character Robert Lohkamp, whose somewhat disillusioned outlook on life is due to his horrifying experiences in the trenches of the First World War's French-German front",
    "Erich Maria Remarque"
  );
  cy.get("#favorite").click();
  cy.contains("Submit").click();
  cy.get("h4").click();
  cy.contains("Three Comrades").contains("Delete from favorite").click();
  cy.contains("Three Comrades").should("not.exist");
});
