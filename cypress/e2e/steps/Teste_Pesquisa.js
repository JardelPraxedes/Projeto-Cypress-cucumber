import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que acesso o site", () => {
  cy.visit("https://transparencia.pb.gov.br");
});

When("escolher a aba de pesquisa", () => {
  cy.get(".tile-search-site-form--searchField");
});

And("escrever {string}", (search) => {
  if (search != "") {
    cy.get(".tile-search-site-form--searchField").type(search);
  }
});

And("Aperto na Lupa", () => {
  cy.get(".tile-search-site-bt-submit").click();
});

Then("As informações serão atualizadas na Tela", () => {});