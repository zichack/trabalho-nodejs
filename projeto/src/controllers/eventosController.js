const Evento = require('../models/evento');
const db = require('../../database/db'); 

const index = async (req, res) => {
    try {
        const eventos = await Evento.listarTodos();
        res.render('eventos/index', { eventos }); 
    } catch (erro) {
        res.status(500).send('Erro interno ao buscar eventos.');
    }
};

const renderizarNovo = async (req, res) => {
    try {
        const resultSalas = await db.query('SELECT id, nome FROM salas ORDER BY nome ASC');
        const resultPalestrantes = await db.query('SELECT id, nome FROM palestrantes ORDER BY nome ASC');
        
        res.render('eventos/novo', { 
            salas: resultSalas.rows,
            palestrantes: resultPalestrantes.rows
        });
    } catch (erro) {
        res.status(500).send('Erro interno.');
    }
};

const criar = async (req, res) => {
    const { titulo, descricao, data, horario_inicio, horario_fim, id_sala, id_palestrante } = req.body;
    try {
        await Evento.criar(titulo, descricao, data, horario_inicio, horario_fim, id_sala, id_palestrante);
        res.redirect('/eventos'); 
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Erro ao salvar o evento.');
    }
};

const renderizarEditar = async (req, res) => {
    try {
        const evento = await Evento.buscarPorId(req.params.id);
        if (!evento) return res.status(404).send('Evento não encontrado');

        const resultSalas = await db.query('SELECT id, nome FROM salas ORDER BY nome ASC');
        res.render('eventos/editar', { evento, salas: resultSalas.rows });
    } catch (erro) {
        res.status(500).send('Erro ao carregar tela de edição.');
    }
};

const editar = async (req, res) => {
    const { titulo, descricao, data, horario_inicio, horario_fim, id_sala } = req.body;
    try {
        await Evento.atualizar(req.params.id, titulo, descricao, data, horario_inicio, horario_fim, id_sala);
        res.redirect('/eventos');
    } catch (erro) {
        res.status(500).send('Erro ao atualizar evento.');
    }
};

module.exports = { index, renderizarNovo, criar, renderizarEditar, editar };