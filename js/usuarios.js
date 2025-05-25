// Carrega usuários da API e exibe na lista
function carregarUsuariosDaAPI() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usuarios => {
      const lista = document.getElementById('listaUsuarios');
      lista.innerHTML = ''; // limpa lista antes de adicionar novos

      usuarios.forEach(usuario => {
        const item = document.createElement('li');
        item.textContent = `${usuario.name} (API) - ${usuario.email}`;
        lista.appendChild(item);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar usuários da API:', error);
    });
}

// Cadastra usuário manualmente
function cadastrarUsuario() {
  const nome = document.getElementById('nomeUsuario').value;
  const email = document.getElementById('emailUsuario').value;
  const tipo = document.getElementById('tipoUsuario').value;

  if (nome && email) {
    const lista = document.getElementById('listaUsuarios');
    const item = document.createElement('li');
    item.textContent = `${nome} (${tipo}) - ${email}`;
    lista.appendChild(item);

    // Limpa os campos
    document.getElementById('nomeUsuario').value = '';
    document.getElementById('emailUsuario').value = '';
    document.getElementById('tipoUsuario').value = 'Administrador';
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}

// Chama a função ao carregar a página
window.onload = carregarUsuariosDaAPI;

