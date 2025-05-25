// Dados de pedidos simulados
const pedidos = [
  {
    produto: "X Burger Triplo",    // Nome do produto
    status: "Entregue",            // Status do pedido
    cliente: "Vitor Izidoro",      // Nome do cliente
    pedido: "03:23",               // Horário do pedido
    entrega: "-"                   // Horário de entrega (ou "-" se não entregue)
  },
  {
    produto: "X Burger Triplo",
    status: "Em preparação",
    cliente: "Henrique Cardoso",
    pedido: "01:47",
    entrega: "02:17"
  },
  {
    produto: "X Burger Triplo",
    status: "Em preparação",
    cliente: "Maria Clara Oliveira",
    pedido: "00:33",
    entrega: "01:03"
  },
  {
    produto: "X Salada",
    status: "Entregue",
    cliente: "Maria Eduarda Cardoso",
    pedido: "04:02",
    entrega: "04:30"
  }
];

// Referências aos elementos do DOM
const tbody = document.querySelector("#pedidosTable tbody"); // Corpo da tabela onde os dados serão inseridos
const statusFilter = document.getElementById("statusFilter"); // Filtro de status
const categoriaFilter = document.getElementById("categoriaFilter"); // Filtro de categoria (produto)

// Função para renderizar os pedidos com base nos filtros
function renderPedidos(filtroStatus = "", filtroCategoria = "") {
  tbody.innerHTML = ""; // Limpa a tabela antes de inserir os dados filtrados

  // Filtra os pedidos conforme os filtros selecionados
  const filtrados = pedidos.filter(p =>
    (filtroStatus === "" || p.status === filtroStatus) &&
    (filtroCategoria === "" || p.produto === filtroCategoria)
  );

  // Para cada pedido filtrado, cria uma linha na tabela
  filtrados.forEach(p => {
    const tr = document.createElement("tr"); // Cria a linha

    // Define o conteúdo HTML da linha com as informações do pedido
tr.innerHTML = `
  <!-- Célula com imagem e nome do produto -->
  <td class="produto">
    <img src="https://img.icons8.com/color/48/000000/hamburger.png"/> 
    ${p.produto} <!-- Nome do produto do pedido -->
  </td>

  <!-- Célula com o status do pedido e estilo condicional -->
  <td>
    <span class="status ${p.status === 'Entregue' ? 'entregue' : 'preparando'}">
      ${p.status} <!-- Texto do status (Entregue ou Em preparação) -->
    </span>
  </td>

  <!-- Célula com o nome do cliente -->
  <td>${p.cliente}</td>

  <!-- Célula com o horário em que o pedido foi feito -->
  <td>${p.pedido}</td>

  <!-- Célula com o horário da entrega e botão de atualização se estiver em preparação -->
  <td>
    ${p.entrega} <!-- Horário da entrega -->
    ${p.status === 'Em preparação' 
      ? '<button class="refresh-btn"><i class="fas fa-sync-alt"></i></button>' 
      : ''} <!-- Se estiver em preparação, exibe o botão de "atualizar" -->
  </td>
`;
    tbody.appendChild(tr); // Adiciona a linha no corpo da tabela
  });
}

// Eventos: atualiza a tabela ao mudar os filtros
statusFilter.addEventListener("change", () => {
  renderPedidos(statusFilter.value, categoriaFilter.value); // Aplica os filtros selecionados
});

categoriaFilter.addEventListener("change", () => {
  renderPedidos(statusFilter.value, categoriaFilter.value);
});

// Ao carregar a página, exibe todos os pedidos
renderPedidos();
