const Usuario = require('../models/usuario');

// CREATE
const criarUsuario = async (req, res) => {
    const { nome, email, senha, tipo } = req.body;

    try {
        await Usuario.criar(nome, email, senha, tipo || 'inscrito');
        console.log("Usuário cadastrado com sucesso no banco!");
        // Redireciona de volta para a lista após salvar
        res.redirect('/usuarios'); 
    } catch (erro) {
        console.error('Erro ao cadastrar usuário:', erro);
        res.status(500).send('Erro ao salvar no banco de dados');
    }
};

// READ
const listarUsuarios = async (req, res) => {
    try {
        const lista = await Usuario.listarTodos();
        // Envia a lista para a sua tela EJS renderizar a tabela
        res.render('usuarios/index', { usuarios: lista });
    } catch (erro) {
        console.error('Erro ao buscar usuários:', erro);
        res.status(500).send('Erro interno ao carregar a lista');
    }
};

module.exports = {
    criarUsuario,
    listarUsuarios
};