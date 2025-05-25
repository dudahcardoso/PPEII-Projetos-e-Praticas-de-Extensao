const form = document.getElementById("formProduto");
const lista = document.getElementById("listaProdutos");

// Lista em memória (simulação)
const produtos = [];

// Lógica de cadastro
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const preco = document.getElementById("preco").value;
  const imagem = document.getElementById("imagem").value || "https://img.icons8.com/color/48/000000/hamburger.png";

  // Cria objeto produto
  const produto = { nome, categoria, preco, imagem };
  produtos.push(produto);

  // Atualiza lista
  renderProdutos();

  // Limpa o formulário
  form.reset();
});

// Exibe produtos na lista
function renderProdutos() {
  lista.innerHTML = "";
  produtos.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">
      <div>
        <strong>${p.nome}</strong><br>
        <small>Categoria: ${p.categoria} | Preço: R$ ${parseFloat(p.preco).toFixed(2)}</small>
      </div>
    `;
    lista.appendChild(li);
  });
}
