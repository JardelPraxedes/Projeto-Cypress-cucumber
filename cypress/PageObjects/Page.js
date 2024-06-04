class Page {
    visitarPagina() {
        return cy.visit('https://transparencia.pb.gov.br');
    }
  
    validarPaginaPrincipal() {
        return cy.get('#logo-site').should('exist');
    }

    ClicarLinkDadosGerais() {
        return cy.get('a[href="https://transparencia.pb.gov.br/dados-gerais/"]').click();
      }
  
    clicarNoLinkSaude() {
        return cy.get('a.external-link[href="https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=SAUDE"]').click();
    }

    validarCabecalho(){
        return cy.get('header').should('be.visible');
    }
    
    validarStatusCabecalho(status){
        if (status === 'existe') {
            cy.get('header').should('be.visible');
          } else if (status === 'não existe') {
            cy.get('header').should('not.exist');
          }
    }

    validarAcessoDadosGerais(status){
        if (status === 'validado') {
            cy.get('meta[property="og:title"][content="Dados Gerais"]').should('exist');
          } else if (status === 'não existe') {
            cy.get('meta[property="og:title"][content="Dados Gerais"]').should('no-exist');
          }
    }

    verificarAcessoSaude(status) {
      if (status === 'com sucesso') {
        return cy.url().should('include', 'https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=SAUDE');
      } else if (status === 'com falhas') {
        return cy.url().should('not.include', 'https://transparencia.pb.gov.br/despesas/despesa-orcamentaria?funcao=SAUDE');
      }
    }
  }
  
  export default Page;
  