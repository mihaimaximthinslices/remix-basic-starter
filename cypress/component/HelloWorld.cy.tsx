import HelloWorld from "~/components/HelloWorld";
import "~/tailwind.css";
describe("HelloWorld", () => {
  it("should display hello world", () => {
    cy.mount(<HelloWorld />);
    cy.get("h1").should("have.text", "Hello World");
  });
});
