const Palestrante = require('../models/palestrante');

module.exports = {
    index: async (req, res) => {
        try {
            const palestrantes = await Palestrante.listarTodos();
            res.render('palestrantes/index', { palestrantes });
        } catch (erro) {
            res.status(500).send('Erro ao buscar palestrantes');
        }
    },
    renderizarNovo: (req, res) => res.render('palestrantes/novo'),
    criar: async (req, res) => {
        try {
            await Palestrante.criar(req.body.nome, req.body.biografia, req.body.email);
            res.redirect('/palestrantes');
        } catch (erro) {
            res.status(500).send('Erro ao cadastrar palestrante. O e-mail já pode estar em uso.');
        }
    }
};