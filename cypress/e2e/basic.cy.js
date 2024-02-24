/// <reference types="cypress" />

before(() => {
  cy.visit('https://www.wcaquino.me/cypress/componentes.html')
})

describe ('Acesso a página e validação de Título', () => {

  it ('Acessar a página e realizar uma assertiva no título', () => {

    const titulo = cy.title()
    cy.get('#formNome').click().type('Erick Rick')
    cy.get('[data-cy="dataSobrenome"]')
      .click()
      .type('Almeida R O')

    // const titulo = cy.title()
    // titulo.should('to.be.equal', 'Campo de Treinamento')
    // titulo.should('to.be.a', 'string')
    // titulo.should('to.have.length', 20)
    // titulo.should('to.be.contains', 'de')

    // cy.title().should(title => {
    //   expect(title).to.be.a('string')
    //   expect(title).to.be.equal('Campo de Treinamento')
    //   expect(title).to.have.length(20)
    //   expect(title).to.be.contains('de')
    // })

    cy.title()
      .should('to.be.equal', 'Campo de Treinamento')
      .and('to.be.a', 'string')
      .and('to.have.length', 20)
      .and('to.be.contains', 'de')
  })

  it ('Selecionando botão', () => {
    // cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    const botaoClickMe = cy.get('#buttonSimple')

    botaoClickMe
      .should('to.have.value', 'Clique Me!')
      .click()
      .should('to.not.have.value', 'Clique Me!')
    
  })
})
