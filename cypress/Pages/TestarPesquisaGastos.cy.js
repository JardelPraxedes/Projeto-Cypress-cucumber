context(
  "Acessar o site de Transparência e testar Pesquisa Quanto foi gasto com:",
  () => {
    beforeEach(() => {
      cy.visit("https://transparencia.pb.gov.br");
    });

    it("Testar Pesquisa Quanto foi gasto com:", () => {
      cy.get("#tipo-despesa").select(
        "https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=CULTURA"
      );
      cy.get("#ano-despesa").select("ano=2020");
      cy.get("#search-despes").click();
    });
  }
);
