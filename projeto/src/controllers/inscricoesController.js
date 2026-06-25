const Inscricao = require('../models/inscricao');

const criar = async (req, res) => {
    const id_usuario = req.session.usuario.id; // Pega quem está logado
    const { id_evento } = req.body; // Pega o evento que ele clicou
    
    try {
        await Inscricao.inscrever(id_usuario, id_evento);
        res.redirect('/dashboard'); // Volta pro dashboard do aluno
    } catch (erro) {
        console.error('Erro ao inscrever:', erro);
        res.status(500).send('Erro ao realizar inscrição. Você já pode estar inscrito.');
    }
};

module.exports = { criar };