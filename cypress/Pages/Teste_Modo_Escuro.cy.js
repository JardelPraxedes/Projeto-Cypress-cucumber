context(
  "Acessar o site de Transparência e testar recurso de Modo Escuro",
  () => {
    beforeEach(() => {
      cy.visit("https://transparencia.pb.gov.br");
    });

    it("Testar Modo Escuro", () => {
      cy.get("#siteaction-contraste");
      cy.get("#siteaction-contraste").click();
    });
  }
);
