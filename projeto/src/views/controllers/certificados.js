// controllers/certificados.js
const CertificadoModel = require('../models/certificado');

const CertificadoController = {
    gerarCertificado: async (req, res) => {
        try {
            
            const { idInscricao } = req.params;

            const dadosCertificado = await CertificadoModel.verificarPresenca(idInscricao);

            if (!dadosCertificado) {
                return res.status(403).send(`
                    <div style="text-align:center; margin-top:50px; font-family:Arial;">
                        <h2>Acesso Negado</h2>
                        <p>Sua presença não foi confirmada para este evento, por isso o certificado não está disponível.</p>
                    </div>
                `);
            }

            return res.render('certificados', {
                nomeUsuario: dadosCertificado.nome_usuario,
                nomeEvento: dadosCertificado.nome_evento,
                cargaHoraria: dadosCertificado.carga_horaria,
                dataEmissao: new Date().toLocaleDateString('pt-BR')
            });

        } catch (error) {
            console.error("Erro ao processar certificado:", error);
            return res.status(500).send("Erro interno ao gerar o certificado.");
        }
    }
};

module.exports = CertificadoController;