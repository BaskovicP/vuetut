/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/Exercises/Ymedu/ex4.html");
  });

  // https://on.cypress.io/interacting-with-elements

  it("should cause the element to shrink and blnk", () => {
    //on.cypress.io/type
    https: cy.get("#effect")
      .should("have.css", "highlight")
      .get("button")
      .contains("Start Effect")
      .click()
      .get("#effect")
      .should("have.class", "shrink")
      .wait(1000)
      .should("have.class", "highlight");
  });
  it('should have the ["my_class1","my_class2", "my_class3"] classes', () => {
    cy.get("div")
      .contains("I got no class :(")
      .should("have.class", "my_class1 my_class2 my_class3");
  });
  // <!-- 3) Let the user enter a class (create some example classes) and attach it -->

  it("should let the user enter a class (create some example classes) and attach it", () => {
    cy.get("input:first")
      .should("have.value", "start")
      .clear()
      .type("someTestClass")
      .get(".someTestClass")
      .get("#changeColor")
      .clear()
      .type("green")
      .get("div")
      .contains('Change the background')
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 128, 0)");
  });
  it('Should render the search bar when we click on a button', ()=> {
    cy.get("button")
    .contains('Start Progress')
    .click()
    .get('#progressBar')
    .should('have.css','width')
    .and('eq','100px')
  })
});
