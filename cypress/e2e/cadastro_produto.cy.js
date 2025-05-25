describe('Cadastro de Produto', () => {
  beforeEach(()=>{
    //ajuste o caminho local, exemplo abri o liver server e pegar a URL
    cy.visit('http://127.0.0.1:5501/produtos.html');
  });

  it('Deve cadastrar um novo hambúguer', () => {
    //preencher os campos do formulario
    cy.get('#nome').type('Hamburguer Artesanal');
    cy.get('#categoria').type('Lanches');
    cy.get('#preco').type('25.90');
    cy.get('#imagem').type('https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png');

    //clicar no botão cadastro
    cy.get('button[type="submit"]').click();

    //verificar se o produro foi adicionado á lista
    cy.get('#listaProdutos')
    .should('contain','Hamburguer Artesanal')
    .and('contain','25.90');
  });
});