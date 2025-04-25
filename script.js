// Dados de pedidos simulados
const pedidos = [
    {
      produto: "X Burger Triplo",
      status: "Entregue",
      cliente: "Vitor Izidoro",
      pedido: "03:23",
      entrega: "-"
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
  const tbody = document.querySelector("#pedidosTable tbody");
  const statusFilter = document.getElementById("statusFilter");
  const categoriaFilter = document.getElementById("categoriaFilter");

  // Função para renderizar os pedidos com base nos filtros
  function renderPedidos(filtroStatus = "", filtroCategoria = "") {
    tbody.innerHTML = "";// Limpa a tabela antes de inserir novos dados
   // Filtra os dados
    const filtrados = pedidos.filter(p =>
      (filtroStatus === "" || p.status === filtroStatus) &&
      (filtroCategoria === "" || p.produto === filtroCategoria)
    );
   // Para cada pedido, criamos uma linha <tr> na tabela
    filtrados.forEach(p => {
      const tr = document.createElement("tr");
      // Monta o conteúdo HTML da linha
      tr.innerHTML = `
        <td class="produto"><img src="https://img.icons8.com/color/48/000000/hamburger.png"/> ${p.produto}</td>
        <td><span class="status ${p.status === 'Entregue' ? 'entregue' : 'preparando'}">${p.status}</span></td>
        <td>${p.cliente}</td>
        <td>${p.pedido}</td>
        <td>${p.entrega} ${p.status === 'Em preparação' ? '<button class="refresh-btn"><i class="fas fa-sync-alt"></i></button>' : ''}</td>
      `;
      tbody.appendChild(tr);// Adiciona a linha à tabela
    });
  }
  // Eventos de mudança nos filtros
  statusFilter.addEventListener("change", () => {
    renderPedidos(statusFilter.value, categoriaFilter.value);
  });
  
  categoriaFilter.addEventListener("change", () => {
    renderPedidos(statusFilter.value, categoriaFilter.value);
  });
  // Renderiza todos os pedidos ao carregar a página
  renderPedidos();
  