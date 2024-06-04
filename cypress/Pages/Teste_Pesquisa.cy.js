context(
  "Acessar o site de Transparência e fazer uma busca de Despesa Orçamentaria",
  () => {
    beforeEach(() => {
      cy.visit("https://transparencia.pb.gov.br");
    });

    it("Fazer Busca de Despesa Orçamentaria", () => {
      cy.get(".tile-search-site-form--searchField");
      cy.get(".tile-search-site-form--searchField").type(
        "Despesa Orçamentaria"
      );
      cy.get(".tile-search-site-bt-submit").click();
    });
  }
);
