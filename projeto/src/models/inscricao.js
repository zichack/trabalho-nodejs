const db = require('../../database/db');

const listarPorUsuario = async (id_usuario) => {
    const query = `
        SELECT i.*, e.titulo, e.data 
        FROM inscricoes i 
        JOIN eventos e ON i.id_evento = e.id 
        WHERE i.id_usuario = $1
    `;
    const result = await db.query(query, [id_usuario]);
    return result.rows;
};

const inscrever = async (id_usuario, id_evento) => {
    const result = await db.query(
        'INSERT INTO inscricoes (id_usuario, id_evento) VALUES ($1, $2) RETURNING *',
        [id_usuario, id_evento]
    );
    return result.rows[0];
};

module.exports = { listarPorUsuario, inscrever };