const db = require('../../database/db');
const crypto = require('crypto');

const listar = async (req, res) => {
    try {
        const query = `
            SELECT c.codigo_autenticacao, c.data_emissao, u.nome as aluno, e.titulo as evento
            FROM certificados c
            JOIN inscricoes i ON c.id_inscricao = i.id
            JOIN usuarios u ON i.id_usuario = u.id
            JOIN eventos e ON i.id_evento = e.id
        `;
        const result = await db.query(query);
        res.render('certificados/index', { certificados: result.rows });
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Erro ao carregar certificados.');
    }
};

const emitirCertificado = async (req, res) => {
    const { id_inscricao } = req.body;
    try {
        const codigoAutenticacao = crypto.randomBytes(12).toString('hex').toUpperCase();

        await db.query(
            'INSERT INTO certificados (id_inscricao, codigo_autenticacao) VALUES ($1, $2)',
            [id_inscricao, codigoAutenticacao]
        );

        res.redirect('/dashboard');
    } catch (erro) {
        if (erro.code === '23505') { 
            return res.status(400).send('Erro: O seu certificado para este evento já foi emitido!');
        }
        console.error(erro);
        res.status(500).send('Erro interno do servidor.');
    }
};

module.exports = { listar, emitirCertificado };