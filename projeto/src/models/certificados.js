// models/certificado.js
const db = require('../database/db'); 

const CertificadoModel = {
    verificarPresenca: async (idInscricao) => {
        const query = `
            SELECT i.*, u.nome AS nome_usuario, e.nome AS nome_evento, e.carga_horaria 
            FROM inscricoes i
            JOIN usuarios u ON i.id_usuario = u.id
            JOIN eventos e ON i.id_evento = e.id
            WHERE i.id = ? AND i.presenca = true
        `;
        
        const [rows] = await db.execute(query, [idInscricao]);
        return rows[0]; 
    }
};

module.exports = CertificadoModel;