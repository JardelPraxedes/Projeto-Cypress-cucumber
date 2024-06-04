import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que acesso o site", (url) => {
  cy.visit(url);
});

When("Ir até o bloco Quanto foi gasto com:", () => {});

And("Selecionar Cultura", () => {
  cy.get("#tipo-despesa").select(
    "https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=CULTURA"
  );
});

And("Selecionar ano 2020", () => {
  cy.get("#ano-despesa").select("ano=2020");
});

And("Apertar em Pesquise", () => {
  cy.get("#search-despesa").click();
});

Then("As informações apareceram em uma nova tela", () => {
  
});
