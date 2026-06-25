const Sala = require('../models/sala');

const index = async (req, res) => {
    try {
        const salas = await Sala.listarTodos();
        res.render('salas/index', { salas });
    } catch (erro) {
        console.error('Erro ao listar salas:', erro);
        res.status(500).send('Erro interno do servidor.');
    }
};

const renderizarNovo = (req, res) => {
    res.render('salas/novo');
};

const criar = async (req, res) => {
    const { nome, capacidade, localizacao } = req.body;
    try {
        await Sala.criar(nome, capacidade, localizacao);
        res.redirect('/salas');
    } catch (erro) {
        console.error('Erro ao criar sala:', erro);
        res.status(500).send('Erro ao salvar no banco.');
    }
};

module.exports = { index, renderizarNovo, criar };