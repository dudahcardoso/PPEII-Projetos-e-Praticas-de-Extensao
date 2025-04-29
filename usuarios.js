function cadastrarUsuario() {
    const nome = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const tipo = document.getElementById('tipoUsuario').value;
  
    if (nome && email) {
      const lista = document.getElementById('listaUsuarios');
      const item = document.createElement('li');
      item.textContent = `${nome} (${tipo}) - ${email}`;
      lista.appendChild(item);
  
      document.getElementById('nomeUsuario').value = '';
      document.getElementById('emailUsuario').value = '';
      document.getElementById('tipoUsuario').value = 'Administrador';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  