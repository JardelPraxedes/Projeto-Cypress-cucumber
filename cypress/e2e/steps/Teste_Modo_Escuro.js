import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que acesso o site", (url) => {
  cy.visit(url);
});

When("Ir até o icone do Modo Escuro", () => {
  cy.get("#siteaction-contraste");
});

And("Apertar", () => {
  cy.get("#siteaction-contraste").click();
});

Then("O site ficará em Modo Escuro", () => {
  cy.get('#main-header').should('have.css', 'background-color', 'rgb(0, 0, 0)')
});
