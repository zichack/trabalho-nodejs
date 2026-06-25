let usuarios = [];

// CREATE
function criarUsuario(id, nome, email) {
    usuarios.push({ id, nome, email });
    console.log("Usuário cadastrado!");
}

// READ
function listarUsuarios() {
    console.log("\nLista de Usuários:");
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.id} | Nome: ${usuario.nome} | Email: ${usuario.email}`);
    });
}

// UPDATE
function atualizarUsuario(id, novoNome, novoEmail) {
    const usuario = usuarios.find(u => u.id === id);

    if (usuario) {
        usuario.nome = novoNome;
        usuario.email = novoEmail;
        console.log("Usuário atualizado!");
    } else {
        console.log("Usuário não encontrado.");
    }
}

// DELETE
function excluirUsuario(id) {
    const indice = usuarios.findIndex(u => u.id === id);

    if (indice !== -1) {
        usuarios.splice(indice, 1);
        console.log("Usuário removido!");
    } else {
        console.log("Usuário não encontrado.");
    }
}

// Exemplo de uso
criarUsuario(1, "Samuel", "samuel@email.com");
criarUsuario(2, "Maria", "maria@email.com");

listarUsuarios();

atualizarUsuario(1, "Samuel Augusto", "samuelaugusto@email.com");

listarUsuarios();

excluirUsuario(2);

listarUsuarios();