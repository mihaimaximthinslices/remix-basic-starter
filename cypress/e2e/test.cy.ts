describe("test", () => {
  it("should allow you to visit the app", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Hello World");
  });
});
