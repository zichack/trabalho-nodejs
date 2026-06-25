const db = require('../../database/db');

const renderizarLogin = (req, res) => {
    res.render('login');
};

const login = async (req, res) => {
    const { email, senha, tipo } = req.body;

    try {
        const result = await db.query(
            'SELECT id, nome, email, tipo FROM usuarios WHERE email = $1 AND senha = $2 AND tipo = $3', 
            [email, senha, tipo]
        );
        
        if (result.rows.length > 0) {
            req.session.usuario = result.rows[0];
            return res.redirect('/dashboard');
        }
        res.status(401).send('Credenciais inválidas. Por favor, tenta novamente.');
    } catch (erro) {
        console.error('Erro no login:', erro);
        res.status(500).send('Erro interno do servidor.');
    }
};

const Evento = require('../models/evento');
const Inscricao = require('../models/inscricao');

const renderizarDashboard = async (req, res) => {
    const usuario = req.session.usuario;

    if (usuario.tipo === 'admin') {
        res.render('dashboard', { usuario });
    } else {
        try {
            const eventosDisponiveis = await Evento.listarTodos();
            const minhasInscricoes = await Inscricao.listarPorUsuario(usuario.id);
            res.render('dashboard-aluno', { usuario, eventos: eventosDisponiveis, inscricoes: minhasInscricoes });
        } catch (erro) {
            console.error(erro);
            res.status(500).send('Erro ao carregar o painel do aluno.');
        }
    }
};

const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports = {
    renderizarLogin,
    login,
    renderizarDashboard,
    logout
};